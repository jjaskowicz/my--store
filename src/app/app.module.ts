import { HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from "@angular/router";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { ConfigModule, provideConfig } from "@spartacus/core";
import { AppRoutingModule } from "@spartacus/storefront";
import { AppComponent } from './app.component';
import { CovidConfig } from "./configs/covid.config";
import { DataBindingModule } from "./features/data-binding/data-binding.module";
import { MyOutletsModule } from "./my-outlets/my-outlets.module";
import { SpartacusModule } from './spartacus/spartacus.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    SpartacusModule,
    MyOutletsModule,
    DataBindingModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
