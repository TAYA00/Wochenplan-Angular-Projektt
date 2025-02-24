import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MealTableComponent } from '.././app/components/meal-table/meal-table.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.csss'],
  imports: [CommonModule, MealTableComponent, RouterModule] //Hinzufügen eines CommonModule für Angular-Direktiven
})
export class AppComponent { }
