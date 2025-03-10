import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { PagesModule } from './pages/pages.module';

import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { ProductServiceService } from './core/services/product-service.service';
import { RouterLink } from '@angular/router';
import { ProductsComponent } from './pages/components/products/products.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    PagesModule,
    FontAwesomeModule
  ],
  providers: [
    provideClientHydration(withEventReplay()),ProductServiceService,provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
