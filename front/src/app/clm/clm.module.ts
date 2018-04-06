import {NgModule} from '@angular/core';
import {ClmService} from './services/clm.service';
import {ClmCreateComponent} from './components/clm-create/clm-create.component';
import {ClmDetailsComponent} from './components/clm-details/clm-details.component';
import {ClmComponent} from './components/clm/clm.component';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
  declarations: [
    ClmCreateComponent,
    ClmDetailsComponent,
    ClmComponent
  ],
  providers: [
    ClmService
  ],
  imports: [
    FormsModule,
    BrowserModule
  ]
})
export class ClmModule {

}
