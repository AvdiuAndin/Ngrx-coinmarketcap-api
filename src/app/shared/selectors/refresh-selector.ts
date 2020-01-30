import {AppState} from '../../reducers';
import {createFeatureSelector, createSelector} from '@ngrx/store';

export const selectRefreshState = createFeatureSelector<AppState, boolean>('refresh');

export const selectRefreshSelector = createSelector(
  selectRefreshState,
  ( bool: boolean ) => bool);

