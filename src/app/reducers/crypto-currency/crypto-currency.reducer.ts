import {Action, createReducer, createSelector, on} from '@ngrx/store';
import {CryptoCurrencyLoadSuccess, GetCryptoCurrencyAction, ListLoadSuccess} from '../../actions/crypto-currency/crypto-currency.actions';
import {CryptoCurrencyListInterface} from '../../shared/interfaces/crypto-currency/crypto-currency-list.interface';
import {CryptoCurrencyReponseDataInterface} from '../../shared/interfaces/crypto-currency/crypto-currency-response-data.interface';
import {ChangeCurrencyAction} from '../../actions/settings/settings.actions';
/*
import {AppState} from '../index';
*/

export interface CryptoCurrencyState {
  cryptoCurrencyList: any[];
  selectedCryptoCurrency: any;
}

export let initialStateCryptoCurrency: CryptoCurrencyState = {
  cryptoCurrencyList: [],
  selectedCryptoCurrency: null
};

const cryptoCurrencyReducer = createReducer(initialStateCryptoCurrency,
  on(ListLoadSuccess, (state: CryptoCurrencyState, info: CryptoCurrencyListInterface) => {
    return { ...state , cryptoCurrencyList: info.data};
  }),
  on(CryptoCurrencyLoadSuccess, (state: CryptoCurrencyState, info: CryptoCurrencyReponseDataInterface) => {
    return { ...state, selectedCryptoCurrency: info.data };
  }),
  on(ChangeCurrencyAction, () => ({ selectedCryptoCurrency: null, cryptoCurrencyList: [] }) )
  );

/*
export const selectCryptoCurrencyList = createSelector(AppState, );
*/
export function cryptocurrencyReducerFunc(state, action: Action) {
  return cryptoCurrencyReducer(state, action);
}


