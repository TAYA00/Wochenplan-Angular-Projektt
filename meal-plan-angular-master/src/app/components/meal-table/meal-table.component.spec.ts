import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MealTableComponent } from './meal-table.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CommonModule } from '@angular/common';
import { MealService } from '../../services/meal.service';

describe('MealTableComponent', () => {
  let component: MealTableComponent;
  let fixture: ComponentFixture<MealTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, CommonModule, MealTableComponent],
      providers: [MealService] 
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MealTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return allergen labels correctly', () => {
    component.data = {
      Allergens: {
        '1': { Id: '1', Label: 'Gluten' },
        '2': { Id: '2', Label: 'Laktose' }
      },
      Products: {},
      Rows: []
    };

    const product = {
      ProductId: 1,
      Name: 'Testprodukt',
      AllergenIds: ['1', '2'],
      Price: { Betrag: 10 }
    };

    expect(component.getAllergenNames(product)).toBe('Gluten, Laktose');
  });

  // 🔹 Text im Fall wenn es keine Allergene gibt
  it('should return "Keine Allergene" when no allergens are present', () => {
    component.data = {
      Allergens: {},
      Products: {},
      Rows: []
    };

    const product = {
      ProductId: 2,
      Name: 'Allergenfreies Produkt',
      AllergenIds: [], // ⬅ Leeres Array
      Price: { Betrag: 5 }
    };

    expect(component.getAllergenNames(product)).toBe('Keine Allergene');
  });

});
