// category-filter.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../../core/interfaces/Product';

@Pipe({
  name: 'categoryFilter',
  standalone:false
})
export class CategoryFilterPipe implements PipeTransform {
  transform(products: Product[], category: string): Product[] {
    if (!products || !category) {
      return products;
    }
    return products.filter(product => product.category === category);
  }
}
