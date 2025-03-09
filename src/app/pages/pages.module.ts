import {  CUSTOM_ELEMENTS_SCHEMA,NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { SingleProductComponent } from './components/single-product/single-product.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import {register as registerSwiperElements} from 'swiper/element/bundle';
import { SliderComponent } from './components/home/slider/slider.component'

registerSwiperElements();


@NgModule({
  declarations: [
    HomeComponent,
    ProductsComponent,
    SingleProductComponent,
    LoginComponent,
    RegisterComponent,
    SliderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent,
    ProductsComponent,
    SingleProductComponent,
    LoginComponent,
    RegisterComponent
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class PagesModule { }
