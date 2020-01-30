import {Component, OnDestroy, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Actions} from '@ngrx/effects';
import {
  ListCryptocurrencyAction
} from '../../../actions/crypto-currency/crypto-currency.actions';
import {Observable, Subscribable, Subscription} from 'rxjs';
import {ListCryptoCurrencyFilter} from '../../../shared/models/crypto-currency/list-crypto-currency-filter';
import {AppState} from '../../../reducers';
import {
  selectCryptoCurrencyListSelector
} from '../../../shared/selectors/crypto-currency/crypto-currency-selector';
import {Router} from '@angular/router';
import {selectCurrentCurrency} from '../../../shared/selectors/settings/settings-selector';
import {selectRefreshSelector} from '../../../shared/selectors/refresh-selector';

@Component({
  selector: 'app-crypto-currency-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnDestroy {

  $crytocurrenciesList = new Observable();
  displayedColumns = ['rank', 'symbol', 'price', 'percent_change_24h'];
  currencyType;
  selectRefreshSubscription: Subscription;
  selectCurrencySubScription: Subscription;

  constructor(private store: Store<AppState>, private router: Router) { }

  ngOnInit() {
    // Get the current currency value
    this.selectCurrencySubScription = this.store.select(selectCurrentCurrency).subscribe(( currencyType: string) => {
      this.currencyType = currencyType;
      // get Crypto Currency list based on the currency type
      this.getCryptoList(this.currencyType);
    });

    // Listen to changes on cryptoCurrencyList
    this.$crytocurrenciesList = this.store.select(selectCryptoCurrencyListSelector);

    // Listen when refresh is clicked
    this.selectRefreshSubscription = this.store.select(selectRefreshSelector).subscribe((refresh) => {
      if (refresh) {
        this.getCryptoList(this.currencyType);
      }
    });
  }

  // navigate to coin when a row is clicked
  private clickCurrencyOfId(id: number) {
    this.router.navigate([`coin/${id}/detail`]);
  }

  // gets cyptolist based on the currency type
  private getCryptoList(currencyType) {
    // Creates an object with default parameters
    const defaultRequestParams = new ListCryptoCurrencyFilter();

    defaultRequestParams.setCurrencyToConvert(currencyType);

    this.store.dispatch(ListCryptocurrencyAction(defaultRequestParams));
  }

  ngOnDestroy(): void {
    this.selectRefreshSubscription.unsubscribe();
    this.selectCurrencySubScription.unsubscribe();
  }
}
