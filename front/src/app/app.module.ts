import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {ClmComponent} from './clm/clm.component';
import {FormsModule} from '@angular/forms';
import {LeftMenuComponent} from './left-menu/left-menu.component';
import {ClmDetailsComponent} from './clm-details/clm-details.component';
import {ClmService} from './clm/clm.service';
import {MessageService} from './messages/message.service';
import {MessageComponent} from './messages/message.component';
import {AppRoutingModule} from './app-routing.module';
import {HomeComponent} from './home/home.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ClmComponent,
    ClmDetailsComponent,
    LeftMenuComponent,
    MessageComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    ClmService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
