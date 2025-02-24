import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MealTableComponent } from '.././app/components/meal-table/meal-table.component'; 

const routes: Routes = [
  { path: '', component: MealTableComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
