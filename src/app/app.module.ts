import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import {TableComponent} from "./virtual-scroll/components/table/table.component";
import { ScrollingModule } from "@angular/cdk/scrolling";
import { HttpClientModule } from "@angular/common/http";
import { VirtualScrollModule } from "./virtual-scroll/virtual-scroll.module";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularSvgIconModule.forRoot(),
    ScrollingModule,
    VirtualScrollModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
