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
import { AutoLogoutService } from 'src/app/services/auto-logout.service';


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

  foo = "foo"

  constructor(
    private currentProduct: CurrentProductService,
    private activeCartService: ActiveCartService,
    private autoLogoutService: AutoLogoutService,
    protected productService: ProductService,
    public config: Config,
  ) {
    this.foo = autoLogoutService.value;
  }

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
