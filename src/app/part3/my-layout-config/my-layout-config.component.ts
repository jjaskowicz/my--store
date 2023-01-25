import { Component, Injectable, OnInit } from '@angular/core';
import { ActiveCartService } from '@spartacus/core';
import { BreakpointService, PageLayoutHandler } from '@spartacus/storefront';
import { combineLatest, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-my-layout-config',
  templateUrl: './my-layout-config.component.html',
  styleUrls: ['./my-layout-config.component.scss'],
})
export class MyLayoutConfigHandler implements PageLayoutHandler {
  constructor(
    protected breakpointService: BreakpointService,
    protected activeCartService: ActiveCartService
  ) {}

  handle(
    slots$: Observable<string[]>,
    pageTemplate?: string | undefined,
    section?: string | undefined
  ) {
    if (pageTemplate === 'ProductDetailsPageTemplate' && !section) {
      return slots$.pipe(
        map((slots) => {
          return slots.map((slot) => (slot === 'Tabs' ? 'SiteLinks' : slot));
        })
      );
    }
    if (pageTemplate === 'SearchResultsListPageTemplate' && !section) {
      return combineLatest([slots$, this.breakpointService.breakpoint$]).pipe(
        map(([slots, brkpoint]) => {
          if (brkpoint === 'lg' || brkpoint === 'xl') {
            return slots;
          } else return [];
        })
      );
    }

    return combineLatest([slots$, this.activeCartService.getActive()]).pipe(
      map(([slots, cart]) => {
        if (!cart?.entries?.length) {
          return this.exclude(slots, ['MiniCart']);
        } else return slots;
      })
    );
  }

  exclude = (arr: any, args: any) =>
    arr.filter((item: any) => args.every((arg: any) => arg !== item));
}
