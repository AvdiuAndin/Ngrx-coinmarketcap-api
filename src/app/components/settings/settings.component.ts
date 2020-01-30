import { Component, OnInit } from '@angular/core';
import {AppState} from '../../reducers';
import {select, Store} from '@ngrx/store';
import {selectCurrencyList, selectCurrentCurrency} from '../../shared/selectors/settings/settings-selector';
import {ChangeCurrencyAction} from '../../actions/settings/settings.actions';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  $currencies = this.store.pipe(select(selectCurrencyList));
  $currentCurrency = this.store.pipe(select(selectCurrentCurrency));


  constructor(private store: Store<AppState>) { }

  changeCurrency(currency) {
    this.store.dispatch(ChangeCurrencyAction({ currency } ));
  }

  ngOnInit(): void {
  }

}
