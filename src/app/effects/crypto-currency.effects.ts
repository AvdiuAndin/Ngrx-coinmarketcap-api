import { Injectable } from '@angular/core';
import {Actions, createEffect, Effect, ofType} from '@ngrx/effects';
import {CoinmarketcapService} from '../shared/services/coinmarketcap.service';
import {CryptocurrencyActionTypes, CryptoCurrencyLoadSuccess, ListLoadSuccess} from '../actions/crypto-currency/crypto-currency.actions';
import {catchError, concatMap, map, mergeMap, tap, withLatestFrom} from 'rxjs/operators';
import {EMPTY, of} from 'rxjs';
import {ListCryptoCurrencyFilter} from '../shared/models/crypto-currency/list-crypto-currency-filter';
import {CryptoCurrencyListInterface} from '../shared/interfaces/crypto-currency/crypto-currency-list.interface';
import {selectCurrentCurrency} from '../shared/selectors/settings/settings-selector';
import {select, Store} from '@ngrx/store';
import {AppState} from '../reducers';
import {DetailCryptoCurrencyFilter} from '../shared/models/crypto-currency/detail-crypto-currency-filter';
import {StopRefresh} from '../actions/refresh/refresh.actions';

@Injectable()
export class CryptoCurrencyEffects {

  loadList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CryptocurrencyActionTypes.ListCryptocurrencies),
      mergeMap((actionInfo: ListCryptoCurrencyFilter) => {
        return this.coinMarketCapService.getListOfCryptocurrencies(actionInfo.filters).pipe(
          map((response: any) => {
            this.store.dispatch(StopRefresh());
            if (response.status) {
              return ListLoadSuccess({data: response.data} as CryptoCurrencyListInterface);
            }
          }),
          catchError(() => EMPTY)
        );
      })
    )
  );

  loadById$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CryptocurrencyActionTypes.GetCryptocurrency),
      mergeMap((actionInfo: DetailCryptoCurrencyFilter) => {
        return this.coinMarketCapService.getCryptoCurrencyById(actionInfo.filters).pipe(
            map((response: any) => {
              this.store.dispatch(StopRefresh());
              if (response.status) {
                return CryptoCurrencyLoadSuccess({ data: response.data[actionInfo.filters.id] });
              }
            }),
            catchError(() => EMPTY)
          );
        }

      )
    )
  );


constructor(private actions$: Actions, private coinMarketCapService: CoinmarketcapService, private store: Store<AppState>) {}
}
