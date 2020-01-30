import {createAction, props} from '@ngrx/store';
import {ListCryptoCurrencyFilter} from '../../shared/models/crypto-currency/list-crypto-currency-filter';
import {CryptoCurrencyListInterface} from '../../shared/interfaces/crypto-currency/crypto-currency-list.interface';
import {DetailCryptoCurrencyFilter} from '../../shared/models/crypto-currency/detail-crypto-currency-filter';
import {CryptoCurrencyReponseDataInterface} from '../../shared/interfaces/crypto-currency/crypto-currency-response-data.interface';

export enum CryptocurrencyActionTypes {
  ListCryptocurrencies = '[Cryptocurrency Page] List',
  ListLoadSuccess = '[Cryptocurrency API] List Loaded Success',
  GetCryptocurrency = '[Cryptocurrency PAGE] Decrease Number',
  GetLoadSuccess = '[Cryptocurrency API] Get Loaded Success'
}
export const ListLoadSuccess = createAction(CryptocurrencyActionTypes.ListLoadSuccess, props<CryptoCurrencyListInterface>());
export const ListCryptocurrencyAction = createAction(CryptocurrencyActionTypes.ListCryptocurrencies, props<ListCryptoCurrencyFilter>());

export const CryptoCurrencyLoadSuccess = createAction(CryptocurrencyActionTypes.GetLoadSuccess, props<CryptoCurrencyReponseDataInterface>());
export const GetCryptoCurrencyAction = createAction(CryptocurrencyActionTypes.GetCryptocurrency, props<DetailCryptoCurrencyFilter>() );
