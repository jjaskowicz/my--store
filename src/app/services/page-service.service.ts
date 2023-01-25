import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface ComponentMeta {
  id: string;
  typeCode: string;
  content?: string;
}

export interface Page {
  path: string;
  title: string;
  componentIds: ComponentMeta[];
}

@Injectable({
  providedIn: 'root',
})
export class PageServiceService {
  readonly pages: Page[] = [
    {
      path: '/',
      title: 'Homepage',
      componentIds: [
        { id: 'header-links', typeCode: 'navigation' },
        {
          id: 'home-banner',
          typeCode: 'banner',
          content:
            'https://plchldr.co/i/400x225?&bg=4287f5&fc=fff&text=Home Banner',
        },
        { id: 'footer', typeCode: 'footer' },
      ],
    },
  ];

  getPage(path: string): Observable<Page | undefined> {
    return of(this.pages.find((page) => page.path === path));
  }
}
