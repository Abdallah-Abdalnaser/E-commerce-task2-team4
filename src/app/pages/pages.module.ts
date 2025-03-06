import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { SingleProductComponent } from './components/single-product/single-product.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';



@NgModule({
  declarations: [
    HomeComponent,
    ProductsComponent,
    SingleProductComponent,
   
  ],
  imports: [
    CommonModule,
    LoginComponent,
    RegisterComponent
  ],
  exports: [
    HomeComponent,
    ProductsComponent,
    SingleProductComponent,
    LoginComponent,
    RegisterComponent
  ]
})
export class PagesModule { }
