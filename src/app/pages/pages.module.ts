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
import { FormsModule } from '@angular/forms';
import { BasicStarComponent } from './components/basic-star/basic-star.component';
import {register as registerSwiperElements} from 'swiper/element/bundle';
import { SliderComponent } from './components/home/slider/slider.component'
import { ReactiveFormsModule } from '@angular/forms';
import { ResultsearchComponent } from './components/products/resultsearch/resultsearch.component';
import { ProductsfilterationComponent } from './components/products/productsfilteration/productsfilteration.component';

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
    BasicStarComponent,
    SliderComponent,
    ResultsearchComponent,
    ProductsfilterationComponent,
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    AppRoutingModule,
    FormsModule
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
