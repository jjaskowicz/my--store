import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { AdDirective } from '../directives/ad.directive';

export interface AdComponent {
  data: any;
}

@Component({
  selector: 'app-ad-banner',
  template: `<div class="ad-banner-example">
    <h3>Advertisements</h3>
    <ng-template adHost></ng-template>
  </div>`,
  styleUrls: ['./ad-banner.component.scss'],
})
export class AdBannerComponent implements OnInit, OnDestroy {
  @Input() ads: any[] = [];

  currentAdIndex = -1;

  @ViewChild(AdDirective, { static: true }) adHost!: AdDirective;
  interval: number | undefined;

  ngOnInit(): void {
    this.loadComponent();
    this.getAds();
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  loadComponent() {
    this.currentAdIndex = (this.currentAdIndex + 1) % this.ads.length;
    const adItem = this.ads[this.currentAdIndex];

    const viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent<AdComponent>(
      adItem.component
    );
    componentRef.instance.data = adItem.data;
  }

  getAds() {
    this.interval = window.setInterval(() => {
      this.loadComponent();
    }, 3000);
  }
}
