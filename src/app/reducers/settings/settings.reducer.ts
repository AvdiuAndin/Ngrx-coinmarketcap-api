import {Action, createReducer, on} from '@ngrx/store';
import {SettingsState} from '../../shared/interfaces/settings/settings.interface';
import {ChangeCurrencyAction} from '../../actions/settings/settings.actions';


const settingsState: SettingsState = {
  currentCurrency: 'USD',
  currencyList: ['USD', 'CNY', 'EUR']
};

export const settingsReducer = createReducer(settingsState,
  on(ChangeCurrencyAction, (state: SettingsState, data: any) => {
    return {...state, currentCurrency: data.currency};
  })
)
export function settingsReducerFunc(state, action: Action) {
  return settingsReducer(state, action);
}
