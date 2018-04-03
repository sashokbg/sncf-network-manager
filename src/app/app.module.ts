import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ClmComponent } from './clm/clm.component';
import { FormsModule } from '@angular/forms';
import {LeftMenuComponent} from './left-menu/left-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ClmComponent,
    LeftMenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
