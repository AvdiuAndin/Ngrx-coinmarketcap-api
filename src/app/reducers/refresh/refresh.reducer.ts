import {Action, createReducer, on} from '@ngrx/store';
import {StartRefresh, StopRefresh} from '../../actions/refresh/refresh.actions';

const refreshState = false;

export const refreshReducer = createReducer(refreshState,
  on(StartRefresh, () => true),
  on(StopRefresh, () => false),
);


export function refreshReducerFunc(state, action: Action) {
  return refreshReducer(state, action);
}
