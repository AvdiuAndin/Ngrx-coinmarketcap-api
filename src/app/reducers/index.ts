import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import {cryptocurrencyReducerFunc, CryptoCurrencyState} from './crypto-currency/crypto-currency.reducer';
import {refreshReducerFunc} from './refresh/refresh.reducer';
import {SettingsState} from '../shared/interfaces/settings/settings.interface';
import {settingsReducerFunc} from './settings/settings.reducer';


export interface AppState {
  cryptocurrency: CryptoCurrencyState;
  settings: SettingsState;
  refresh: boolean;
}


export const reducers: ActionReducerMap<AppState> = {
  cryptocurrency: cryptocurrencyReducerFunc,
  settings: settingsReducerFunc,
  refresh: refreshReducerFunc
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
