import {  CUSTOM_ELEMENTS_SCHEMA,NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { SingleProductComponent } from './components/single-product/single-product.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AppRoutingModule } from '../app-routing.module';
import { StarRatingComponent } from './components/star-rating/star-rating.component';
import { CategoryFilterPipe } from './pipes/category-filter.pipe';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BasicStarComponent } from './components/basic-star/basic-star.component';
import {register as registerSwiperElements} from 'swiper/element/bundle';
import { SliderComponent } from './components/home/slider/slider.component'
import { ReactiveFormsModule } from '@angular/forms';

registerSwiperElements();


@NgModule({
  declarations: [
    HomeComponent,
    ProductsComponent,
    SingleProductComponent,
    LoginComponent,
    RegisterComponent,
    StarRatingComponent,
    CategoryFilterPipe,
<<<<<<< HEAD
    BasicStarComponent,SliderComponent
=======
    BasicStarComponent,
    SliderComponent,
>>>>>>> origin/master
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    AppRoutingModule,
<<<<<<< HEAD
    FormsModule,
    ReactiveFormsModule
=======
    FormsModule
>>>>>>> origin/master
  ],
  exports: [
    HomeComponent,
    ProductsComponent,
    SingleProductComponent,
    LoginComponent,
    RegisterComponent,StarRatingComponent,BasicStarComponent
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class PagesModule { }
