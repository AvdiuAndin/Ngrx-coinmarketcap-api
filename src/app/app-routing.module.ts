import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from './shared/components/page-not-found/page-not-found.component';
import {ListComponent} from './components/crypto-currency/list/list.component';
import {DetailComponent} from './components/crypto-currency/detail/detail.component';
import {SettingsComponent} from './components/settings/settings.component';

const routes: Routes = [
  { path: '', component: ListComponent },
  { path: 'settings', component: SettingsComponent},
  { path: 'coin/:id/detail', component: DetailComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
