import { Component } from '@angular/core';
import { faLocationDot, IconDefinition, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  faLocationDot:IconDefinition = faLocationDot;
  faMagnifyingGlass:IconDefinition = faMagnifyingGlass;
}
