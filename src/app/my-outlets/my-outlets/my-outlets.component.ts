import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActiveCartService } from '@spartacus/core';
import { CurrentProductService } from '@spartacus/storefront';
import { BehaviorSubject } from 'rxjs';

interface Stock {
  isValueRounded: boolean,
  stockLevel: number,
  stockLevelStatus: string,
}

@Component({
  selector: 'app-my-outlets',
  templateUrl: './my-outlets.component.html',
  styleUrls: ['./my-outlets.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class MyOutletsComponent implements OnInit {

  showCartEntries: boolean = false;
  stock!: Stock;
  cartEntries$ = new BehaviorSubject<[]>([]);


  constructor(private currentProduct: CurrentProductService, private activeCartService: ActiveCartService) { }

  ngOnInit(): void {
    this.currentProduct.getProduct().subscribe((res: any) => {
      this.stock = res?.stock;
    })

    this.activeCartService.getActive().subscribe((res: any) => {
      console.log(res.entries);
      
      this.cartEntries$.next(res.entries);
    })
  }

}
