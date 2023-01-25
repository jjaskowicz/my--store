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

@Injectable({ providedIn: 'root' })
export class PageService {
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
    {
      path: 'contact',
      title: 'Contact page',
      componentIds: [
        { id: 'header-links', typeCode: 'navigation' },
        {
          id: 'contact-banner',
          typeCode: 'banner',
          content:
            'https://plchldr.co/i/400x225?&bg=f55d42&fc=fff&text=Contact Banner',
        },
        {
          id: 'contact-text',
          typeCode: 'text',
          content: 'This is contact text',
        },
        { id: 'footer', typeCode: 'footer' },
      ],
    },
    {
      path: 'faq',
      title: 'Frequently Asked Questions',
      componentIds: [
        { id: 'header-links', typeCode: 'navigation' },
        {
          id: 'faq-banner',
          typeCode: 'banner',
          content:
            'https://plchldr.co/i/400x225?&bg=5af542&fc=fff&text=FAQ Banner',
        },
        { id: 'faq-text', typeCode: 'text', content: 'This is faq text' },
        { id: 'footer', typeCode: 'footer' },
      ],
    },
  ];

  getPage(path: string): Observable<Page | undefined> {
    return of(this.pages.find((page) => page.path === path));
  }
}
