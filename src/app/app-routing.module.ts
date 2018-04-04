import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ClmComponent} from './clm/clm.component';
import {HomeComponent} from './home/home.component';
import {ClmDetailsComponent} from './clm-details/clm-details.component';

const routes: Routes = [
  {path: 'clm', component: ClmComponent},
  {path: 'clm-details/:clm-id', component: ClmDetailsComponent},
  {path: 'home', component: HomeComponent},
  {path: '**', redirectTo: '/clm'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}