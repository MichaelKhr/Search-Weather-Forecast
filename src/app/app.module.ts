import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgprimeModule } from './ngprime/ngprime.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeCardComponent } from './share/components/home-card/home-card.component';
import { MainLayoutComponent } from './share/components/main-layout/main-layout.component';
import { HttpClientModule } from '@angular/common/http';
import { DailyComponent } from './share/components/daily/daily.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeCardComponent,
    MainLayoutComponent,
    DailyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgprimeModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
