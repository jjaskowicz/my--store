import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {
  CmsProductCarouselComponent as model,
  ActiveCartService,
  Cart,
  Product,
  ProductService,
  Config,
} from '@spartacus/core';
import { CurrentProductService } from '@spartacus/storefront';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';


declare module '@spartacus/core' {
  interface Product {
    tags?: string;
  }
}


@Component({
  selector: 'app-my-outlets',
  templateUrl: './my-outlets.component.html',
  styleUrls: ['./my-outlets.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MyOutletsComponent implements OnInit {

  showCartEntries: boolean = false;
  stock$: Observable<Product | null> = this.currentProduct.getProduct();
  cartEntries$: Observable<Cart> = this.activeCartService.getActive();
  stockNotification$!: Observable<any>;
  currentProductName!: string;

  constructor(
    private currentProduct: CurrentProductService,
    private activeCartService: ActiveCartService,
    protected productService: ProductService,
    public config: Config
  ) {}

  ngOnInit(): void {

    this.stockNotification$ = combineLatest(
      this.stock$,
      this.cartEntries$
    ).pipe(
      map(([currentProduct, cartEntries]) => {
        this.currentProductName = currentProduct?.name!;
        return cartEntries?.entries
          ?.map((entry) =>
            entry?.product?.code === currentProduct?.code
              ? entry?.quantity
              : null
          )
          .filter((item) => item);
      })
    );
  }
}
