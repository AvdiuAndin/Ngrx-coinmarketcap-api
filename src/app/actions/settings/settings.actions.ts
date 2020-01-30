import {createAction, props} from '@ngrx/store';

export enum SettingsActionTypes {
  ChangeCurrency = '[Settings] Change Currency'
}


export const ChangeCurrencyAction = createAction(SettingsActionTypes.ChangeCurrency, props<{ currency: string }>());

