import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { ListComponent } from './components/crypto-currency/list/list.component';
import { DetailComponent } from './components/crypto-currency/detail/detail.component';
import { SettingsComponent } from './components/settings/settings.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSelectModule, MatTableModule} from '@angular/material';
import { RefreshComponent } from './shared/components/refresh/refresh.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { CryptoCurrencyEffects } from './effects/crypto-currency.effects';
import { CoinmarketcapService } from './shared/services/coinmarketcap.service';
import { RestService } from './shared/services/rest.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    DetailComponent,
    SettingsComponent,
    PageNotFoundComponent,
    HeaderComponent,
    RefreshComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),
    EffectsModule.forRoot([CryptoCurrencyEffects]),
    MatSelectModule
  ],
  providers: [
    CoinmarketcapService,
    RestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
