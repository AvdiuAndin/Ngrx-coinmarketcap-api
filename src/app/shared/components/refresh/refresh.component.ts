import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Action, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {StartRefresh, StopRefresh} from '../../../actions/refresh/refresh.actions';
import {AppState} from '../../../reducers';
import {selectRefreshSelector} from '../../selectors/refresh-selector';

@Component({
  selector: 'app-refresh',
  templateUrl: './refresh.component.html',
  styleUrls: ['./refresh.component.scss']
})
export class RefreshComponent implements OnInit {
  $refreshing;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.$refreshing = this.store.select(selectRefreshSelector);
  }

  /*Events*/
  public refreshBtnClick() {
    this.store.dispatch(StartRefresh());
  }

}
