import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CarsListComponent } from './cars-list/cars-list.component';
import { PaymentComponent } from './payment/payment.component';
import { ReviewComponent } from './review/review.component';

const routes: Routes = [

  {path:'home',component:HomeComponent},
  {path:'car',component:CarsListComponent},
  {path:'payment',component:PaymentComponent},
  {path:'review',component:ReviewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
