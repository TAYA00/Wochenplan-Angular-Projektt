import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Allergen {
  Id: string;
  Label: string;
}

interface Product {
  ProductId: number;
  Name: string;
  AllergenIds?: string[];
  Price: { Betrag: number };
}

interface MealData {
  Allergens: { [key: string]: Allergen };
  Products: { [key: string]: Product };
  Rows: { Name: string; Days: { Weekday: number; ProductIds: { ProductId: number }[] }[] }[];
}

@Component({
  selector: 'app-meal-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: '../meal-table/meal-table.component.html',
  styleUrls: ['../meal-table/meal-table.component.css']
})
export class MealTableComponent implements OnInit {
  data!: MealData;
  rows: any[] = [];
  isLoading = true;
  errorMessage = '';
  private apiUrl = 'https://my.qnips.io/dbapi/ha';
  daysOfWeek: { name: string; date: string }[] = [];
  weekNumber!: number; // 🔹 Variable für KW

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchMeals().subscribe({
      next: (response) => {
        console.log('Erhaltene Daten:', response);
        if (response) {
          this.data = response as MealData;
          this.rows = this.data.Rows ?? [];

        }
        this.generateWeekDates();
        this.weekNumber = this.getISOWeek(new Date()); // 🔹 Abfrage der aktuellen Wochennummer
        this.isLoading = false;
      },
      error: (error) => {
        console.error(`Fehler beim Laden: ${error.message}`);
        this.errorMessage = 'Hochladen von Daten nicht möglich';
        this.isLoading = false;
      }
    });
  }

  fetchMeals(): Observable<MealData> {
    return this.http.get<MealData>(this.apiUrl);
  }

  getAllergenNames(product: Product): string {
    if (!product.AllergenIds || product.AllergenIds.length === 0 || !this.data?.Allergens) {
      return 'Keine Allergene';
    }
    return product.AllergenIds
      .map(aid => this.data.Allergens[aid]?.Label || 'Unbekanntes Allergen')
      .join(', ');
  }

  private generateWeekDates(): void {
    const today = new Date();
    const currentDay = today.getDay();
    const monday = new Date(today);
    monday.setDate(today.getDate() - (currentDay === 0 ? 6 : currentDay - 1));

    const days = ['Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag'];
    this.daysOfWeek = days.map((day, index) => {
      const date = new Date(monday);
      date.setDate(monday.getDate() + index);
      return { name: day, date: date.toLocaleDateString('uk-DE') };
    });
  }

  private getISOWeek(date: Date): number {
    const tempDate = new Date(date.getTime());
    tempDate.setHours(0, 0, 0, 0);
    tempDate.setDate(tempDate.getDate() + 3 - ((tempDate.getDay() + 6) % 7));
    const firstThursday = tempDate.getTime();
    tempDate.setMonth(0, 1);
    if (tempDate.getDay() !== 4) {
      tempDate.setMonth(0, 1 + ((4 - tempDate.getDay() + 7) % 7));
    }
    return Math.ceil((firstThursday - tempDate.getTime()) / 604800000) + 1;
  }
}

