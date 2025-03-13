import { Component } from '@angular/core';
import { faMagnifyingGlass, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { SearchService } from '../../../../core/services/search.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductServiceService } from '../../../../core/services/product-service.service';

@Component({
  selector: 'app-search',
  standalone: false,
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
    faMagnifyingGlass:IconDefinition = faMagnifyingGlass;
    constructor(private SearchService:SearchService,private ProductServiceService:ProductServiceService ,private Router:Router ,private Route:ActivatedRoute) {}
    search(productname:HTMLInputElement) {
        this.SearchService.searchProductByName(productname.value).subscribe(
          (data)=> {
            this.Router.navigate(['/products'],{relativeTo:this.Route})
            this.ProductServiceService.product.next(data);
          }
        )
    }
}
