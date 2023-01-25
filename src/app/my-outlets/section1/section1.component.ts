import { Component, OnInit } from '@angular/core';
import { Product, ProductService } from '@spartacus/core';
import { BehaviorSubject, interval, Subscription } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-section1',
  templateUrl: './section1.component.html',
  styleUrls: ['./section1.component.scss'],
})
export class Section1Component implements OnInit {
  subscription: Subscription = new Subscription();
  code = '';
  product$: BehaviorSubject<Product> = new BehaviorSubject<Product>({});

  productCodes = ['553637', '358639'];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.subscription = interval(2000)
      .pipe(
        switchMap(() => this.productCodes.filter((code) => this.code !== code)),
        switchMap((code) => this.productService.get(code)),
        tap((product: any) => (this.code = product?.code))
      )
      .subscribe((data: any) => this.product$.next(data));
  }
}
