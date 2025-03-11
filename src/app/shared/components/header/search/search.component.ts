import { Component } from '@angular/core';
import { faMagnifyingGlass, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-search',
  standalone: false,
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
    faMagnifyingGlass:IconDefinition = faMagnifyingGlass;
}
