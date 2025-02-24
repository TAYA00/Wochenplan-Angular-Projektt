
import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

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

@Injectable({
  providedIn: 'root'
})

export class MealService {
  private apiUrl = 'https://my.qnips.io/dbapi/ha';

  constructor(private http: HttpClient) {}

 getMeals(): Observable<MealData> {
    return this.http.get<MealData>(this.apiUrl).pipe(
      catchError(error => {
        console.error('Fehler beim Datenabruf:', error);
        return throwError(() => new Error('Datenabruf vom Server fehlgeschlagen'));
      })
    );
  }
}


