import { Component, OnInit } from '@angular/core';
import {
  ActiveCartService,
  Product,
  ProductService,
  RoutingService,
  UserOrderService,
} from '@spartacus/core';
import { OrderService } from '@spartacus/order/core';
import { OrderFacade } from '@spartacus/order/root';
import { OrderDetailsService } from '@spartacus/storefront';
import { Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-recentyl-bought',
  templateUrl: './recentyl-bought.component.html',
  styleUrls: ['./recentyl-bought.component.scss'],
})
export class RecentylBoughtComponent implements OnInit {
  order$: Observable<any> = this.orderService.getOrderHistoryList(1);
  items$!: Observable<Observable<Product | null>[]>;

  constructor(
    // private activeCartService: ActiveCartService,
    // private routingService: RoutingService,
    private productService: ProductService,
    protected orderService: OrderFacade
  ) {}

  ngOnInit(): void {
    this.order$
      .pipe(
        switchMap((res) =>
          res.orders.map((order: any) => {
            return this.productService.get(order.code).subscribe((e: any) => {
              console.log(e);
            });
          })
        )
      )
      .subscribe();
  }
}
