import { ProductAction } from './../../../store/actions';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { RatingModule } from 'primeng/rating';
import { Store } from '@ngrx/store';
import { selectProducts } from '../../../store/selectors';
import { FormsModule } from '@angular/forms';
interface Column {
  field: string;
  header: string;
}

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, TableModule, TagModule, RatingModule, FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  products!: any[];

  constructor(private store: Store) {
    this.store
      .select(selectProducts)
      .subscribe((products) => (this.products = products));
  }

  ngOnInit() {
    this.store.dispatch(ProductAction.productLoadRequest());
  }

  getSeverity(status: string) {
    switch (status) {
      case 'in stock':
        return 'success';
      case 'pre-order':
        return 'warning';
      case 'out of stock':
        return 'danger';
    }
    return 'success';
  }
}
