import { Component } from '@angular/core';
import { faGlobe, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer-language-selector',
  standalone: false,
  templateUrl: './footer-language-selector.component.html',
  styleUrl: './footer-language-selector.component.css'
})
export class FooterLanguageSelectorComponent {
  faGlobe:IconDefinition= faGlobe;
}
