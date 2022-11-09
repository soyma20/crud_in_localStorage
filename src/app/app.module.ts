import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from "@angular/router";

import {AppComponent} from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {CarsModule} from "./modules";
import {MainLayoutComponent} from './layouts/main-layout/main-layout.component';
import {HeaderComponent} from './components/header/header.component';
import {BannerComponent} from './components/banner/banner.component';
import {HideAfterDirective} from "./directives/hide-after.directive";

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    HeaderComponent,
    BannerComponent,
    HideAfterDirective
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    CarsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
