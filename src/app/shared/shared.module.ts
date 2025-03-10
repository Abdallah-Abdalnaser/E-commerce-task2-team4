import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavigationComponent } from './components/header/navigation/navigation.component';
import { FooterLinksComponent } from './components/footer/footer-links/footer-links.component';
import { FooterLanguageSelectorComponent } from './components/footer/footer-language-selector/footer-language-selector.component';
import { FooterInfoComponent } from './components/footer/footer-info/footer-info.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    FooterLinksComponent,
    FooterLanguageSelectorComponent,
    FooterInfoComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class SharedModule { }
