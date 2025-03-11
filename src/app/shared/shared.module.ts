import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavigationComponent } from './components/header/navigation/navigation.component';
import { FooterLinksComponent } from './components/footer/footer-links/footer-links.component';
import { FooterLanguageSelectorComponent } from './components/footer/footer-language-selector/footer-language-selector.component';
import { FooterInfoComponent } from './components/footer/footer-info/footer-info.component';
import { SearchComponent } from './components/header/search/search.component';
import { UserinfoComponent } from './components/header/userinfo/userinfo.component';
import { LogoLocationComponent } from './components/header/logo-location/logo-location.component';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    FooterLinksComponent,
    FooterLanguageSelectorComponent,
    FooterInfoComponent,
    SearchComponent,
    UserinfoComponent,
    LogoLocationComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    AppRoutingModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class SharedModule { }
