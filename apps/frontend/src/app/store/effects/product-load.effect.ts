import { productLoadFailureReducer } from './../reducers/product-load-request-reducer';
import { ProductService } from './../../pages/dashboard/products/product.service';
import { ProductAction } from './../actions';
import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap } from 'rxjs/operators';

export const ProductLoadEffect = createEffect(
  (actions$ = inject(Actions), productService = inject(ProductService)) => {
    return actions$.pipe(
      ofType(ProductAction.productLoadRequest),
      exhaustMap(async () => {
        try {
          const data = await productService.getProducts();
          return ProductAction.productLoadSuccess({ products: data });
        } catch (error: any) {
          return ProductAction.productLoadFailure({ error: error.message });
        }
      })
    );
  },
  { functional: true }
);
