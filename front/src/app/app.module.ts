import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {FormsModule} from '@angular/forms';
import {LeftMenuComponent} from './left-menu/left-menu.component';
import {MessageService} from './messages/message.service';
import {MessageComponent} from './messages/message.component';
import {AppRoutingModule} from './app-routing.module';
import {HomeComponent} from './home/home.component';
import {HttpClientModule} from '@angular/common/http';
import {ClmModule} from './clm/clm.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeftMenuComponent,
    MessageComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ClmModule
  ],
  providers: [
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
