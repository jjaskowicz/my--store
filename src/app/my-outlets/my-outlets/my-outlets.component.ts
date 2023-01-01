import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActiveCartService, Cart, Product } from '@spartacus/core';
import { CurrentProductService } from '@spartacus/storefront';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-my-outlets',
  templateUrl: './my-outlets.component.html',
  styleUrls: ['./my-outlets.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class MyOutletsComponent implements OnInit {

  showCartEntries: boolean = false;
  stock$: Observable<Product | null> = this.currentProduct.getProduct();
  cartEntries$: Observable<Cart> = this.activeCartService.getActive();


  constructor(private currentProduct: CurrentProductService, private activeCartService: ActiveCartService) { }

  ngOnInit(): void {
  }

}
