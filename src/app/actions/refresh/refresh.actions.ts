import {createAction} from '@ngrx/store';

export enum RefreshActionTypes {
  StartRefresh = '[Refresh] Click Refresh',
  StopRefresh = '[Refresh] Stop Refresh'
}

export const StartRefresh = createAction(RefreshActionTypes.StartRefresh);
export const StopRefresh = createAction(RefreshActionTypes.StopRefresh);
