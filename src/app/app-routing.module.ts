import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ClmComponent} from './clm/clm.component';

const routes: Routes = [
  {path: 'clm', component: ClmComponent},
  {path: '**', redirectTo: '/clm'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
