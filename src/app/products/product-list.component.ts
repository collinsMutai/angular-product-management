import { Component } from '@angular/core';
//  we'll use the component as a directive
@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html'
})
export class ProductListComponent {
  pageTitle: string = 'Interpolation';
}
