import {AppState} from '../../../reducers';
import {CryptoCurrencyState} from '../../../reducers/crypto-currency/crypto-currency.reducer';
import {createFeatureSelector, createSelector} from '@ngrx/store';
import {SettingsState} from '../../interfaces/settings/settings.interface';

const settingsKey = 'settings';

export const selectSettingsState = createFeatureSelector<AppState, SettingsState>(settingsKey);


// get current Crypto Currency List
export const selectCurrentCurrency = createSelector(
  selectSettingsState,
  ( settingsState: SettingsState ) => settingsState.currentCurrency);

export const selectCurrencyList = createSelector(
  selectSettingsState,
  (settingsState: SettingsState) => settingsState.currencyList
);


