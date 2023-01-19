import { Component, OnInit } from '@angular/core';
import {
  ActiveCartService,
  RoutingService,
  UserOrderService,
} from '@spartacus/core';
import { OrderService } from '@spartacus/order/core';
import { OrderFacade } from '@spartacus/order/root';
import { OrderDetailsService } from '@spartacus/storefront';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-recentyl-bought',
  templateUrl: './recentyl-bought.component.html',
  styleUrls: ['./recentyl-bought.component.scss'],
})
export class RecentylBoughtComponent implements OnInit {
  order$: Observable<any> = this.orderDetailsService.getOrderDetails();
  order2$: Observable<any> = this.userOrderService.getOrderHistoryList(0);
  order3$: Observable<any> = this.orderService.getOrderHistoryList(1);

  constructor(
    private userOrderService: UserOrderService,
    private activeCartService: ActiveCartService,
    private routingService: RoutingService,
    protected orderDetailsService: OrderDetailsService,
    protected orderService: OrderFacade
  ) {}

  ngOnInit(): void {
    // this.order$.subscribe((e) => {
    //   console.log(e);
    // });
    this.order3$.subscribe((e) => {
      console.log(e);
    });
  }
}
