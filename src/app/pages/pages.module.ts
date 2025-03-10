import { NgModule } from '@angular/core';
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
  ],
  imports: [
    CommonModule,AppRoutingModule,FormsModule
  ],
  exports: [
    HomeComponent,
    ProductsComponent,
    SingleProductComponent,
    LoginComponent,
    RegisterComponent,StarRatingComponent,BasicStarComponent
  ]
})
export class PagesModule { }
