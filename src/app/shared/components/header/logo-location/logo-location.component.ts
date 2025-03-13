import { Component } from '@angular/core';
import { faAngleRight, faLocationDot, faUser, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-logo-location',
  standalone: false,
  templateUrl: './logo-location.component.html',
  styleUrl: './logo-location.component.css'
})
export class LogoLocationComponent {
  faLocationDot:IconDefinition = faLocationDot;
  faUser:IconDefinition = faUser;
  faAngleRight:IconDefinition = faAngleRight;
}
