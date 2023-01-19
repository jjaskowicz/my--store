import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from '@spartacus/storefront';
import { AppComponent } from './app.component';
import { DataBindingModule } from './features/data-binding/data-binding.module';
import { MyOutletsModule } from './my-outlets/my-outlets.module';
import { AutoLogoutService } from './services/auto-logout.service';
import { SpartacusModule } from './spartacus/spartacus.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    SpartacusModule,
    MyOutletsModule,
    DataBindingModule,
  ],
  providers: [AutoLogoutService],
  bootstrap: [AppComponent],
})
export class AppModule {}
