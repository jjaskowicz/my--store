import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {
  ActiveCartService,
  RoutingService,
  UserOrderService,
} from '@spartacus/core';
import { OrderDetailsService, OutletPosition } from '@spartacus/storefront';
import { Observable } from 'rxjs';
import { filter, map, take, tap } from 'rxjs/operators';

@Component({
  selector: 'app-reorder',
  templateUrl: './reorder.component.html',
  styleUrls: ['./reorder.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ReorderComponent implements OnInit {

  order$: Observable<any> = this.orderDetailsService.getOrderDetails();
  
  constructor(
    private userOrderService: UserOrderService,
    private activeCartService: ActiveCartService,
    private routingService: RoutingService,
    protected orderDetailsService: OrderDetailsService
  ) {}

  ngOnInit(): void {
  }

  reorder(): void {
    this.order$.pipe(
        filter(order => Boolean(order)),
        take(1),
        map((order) => this.activeCartService.addEntries(order.entries)),
        tap(() => this.routingService.go({ cxRoute: 'cart' }))
      ).subscribe();
  }
}
