import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { ShopHeaderComponentModule } from './layout/shop-header/shop-header.component';
import { ShopFooterComponentModule } from './layout/shop-footer/shop-footer.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ShopHeaderComponentModule,
    ShopFooterComponentModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
