import {Component, OnDestroy, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {AppState} from '../../../reducers';
import {ActivatedRoute} from '@angular/router';
import {GetCryptoCurrencyAction} from '../../../actions/crypto-currency/crypto-currency.actions';
import {cryptoCurrencySelector} from '../../../shared/selectors/crypto-currency/crypto-currency-selector';
import {DetailCryptoCurrencyFilter} from '../../../shared/models/crypto-currency/detail-crypto-currency-filter';
import {selectCurrentCurrency} from '../../../shared/selectors/settings/settings-selector';
import {selectRefreshSelector} from '../../../shared/selectors/refresh-selector';
import {Observable, Subscription} from 'rxjs';

@Component({
  selector: 'app-cryptocurrency-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit, OnDestroy {
  $coinDetail =  this.store.select(cryptoCurrencySelector);
  currentCurrency: string;

  selectRefreshSubscription: Subscription;
  selectCurrencySubScription: Subscription;

  constructor(private store: Store<AppState>, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    const cryptoCurrencyId = this.activatedRoute.snapshot.paramMap.get('id');
    // Get selected currency and get crypto currency
    this.selectCurrencySubScription = this.store.select(selectCurrentCurrency).subscribe(( cuurencyType: string) => {
      this.currentCurrency = cuurencyType;
      this.getCryptoData(cryptoCurrencyId, cuurencyType);
    });

    // Listen when refresh is clicked
    this.selectRefreshSubscription = this.store.select(selectRefreshSelector).subscribe((refresh) => {
      if (refresh) {
        this.getCryptoData(cryptoCurrencyId, this.currentCurrency);
      }
    });
  }

  // Fire action which request crypto data
  private getCryptoData(cryptoCurrencyId, currency) {
    const filter = new DetailCryptoCurrencyFilter();

    filter.setId(cryptoCurrencyId);
    filter.setCurrencyToConvert(currency);

    this.store.dispatch(GetCryptoCurrencyAction(filter));
  }

  ngOnDestroy(): void {
    this.selectRefreshSubscription.unsubscribe();
    this.selectCurrencySubScription.unsubscribe();
  }


}
