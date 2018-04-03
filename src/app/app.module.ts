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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ClmComponent,
    ClmDetailsComponent,
    LeftMenuComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    ClmService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
