import { Component, OnInit } from '@angular/core';
import { Product, ProductSearchPage, ProductSearchService } from '@spartacus/core';
import { CurrentProductService } from '@spartacus/storefront';
import { Observable, of } from 'rxjs';
import { map, switchMap, tap, finalize, filter } from 'rxjs/operators';

@Component({
  selector: 'app-upselling',
  templateUrl: './upselling.component.html',
  styleUrls: ['./upselling.component.scss'],
})
export class UpsellingComponent implements OnInit {

  items$!: Observable<Observable<Product>[]>;
  currentProduct$: Observable<Product | null> = this.currentProductService.getProduct();

  constructor(
    private currentProductService: CurrentProductService,
    private productSearchService: ProductSearchService
  ) {}

  ngOnInit(): void {
    this.currentProduct$.pipe(
      map((product: any) => {
        this.productSearchService.search(product?.name);
      })).subscribe()

      this.items$ = this.productSearchService.getResults().pipe(
        filter(e => !!e && e.hasOwnProperty('products')),
        map((e: any) => {
        return e.products.map((e2: any) => {
          return of(e2)
        })
      }));
  }

  // foo(e: any) {
  //   if (e) {
  //     this.productSearchService.search(e);
  //     this.productSearchService.getResults().subscribe((e) => {
  //       console.log(e);
  //     });
  //   }
  // }

  // items$: Observable<Observable<Product | undefined>[]> =
  //   this.componentData$.pipe(
  //     map((data) => data.productCodes?.trim().split(' ') ?? []),
  //     map((codes) =>
  //       codes.map((code) =>
  //         this.productService.get(code, [...this.PRODUCT_SCOPE])
  //       )
  //     )
  //   );
}
