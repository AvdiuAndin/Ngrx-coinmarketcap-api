import {createFeatureSelector, createSelector} from '@ngrx/store';
import {AppState} from '../../../reducers';
import {CryptoCurrencyState} from '../../../reducers/crypto-currency/crypto-currency.reducer';
import {selectCurrentCurrency} from '../settings/settings-selector';
import { formatNumberBasedOnCurrency } from '../../services/util.functions';

const cryptocurrencyKey = 'cryptocurrency';

export const selectCryptoCurrencyState = createFeatureSelector<AppState, CryptoCurrencyState>(cryptocurrencyKey);
// get current Crypto Currency List

/*
* Get list of crypto currencies and format to adjust the view
* */
export const selectCryptoCurrencyListSelector = createSelector(
  selectCryptoCurrencyState,
  selectCurrentCurrency,
  ( cryptoCurrencyState: CryptoCurrencyState, currentCurrency: string) => {
    const currentList = cryptoCurrencyState.cryptoCurrencyList as any[];
    const transformedCryptoCurrencyList =
      currentList.map(( cryptoInfo ) => {
        return {
          id: cryptoInfo.id,
          cmc_rank: cryptoInfo.cmc_rank,
          symbol: cryptoInfo.symbol,
          // formats the price based on the given currency
          price: formatNumberBasedOnCurrency(cryptoInfo.quote[currentCurrency].price, currentCurrency),
          percent_change_24h: cryptoInfo.quote[currentCurrency].percent_change_24h.toFixed(2)
        };
    });
    return transformedCryptoCurrencyList;
  });


/*
* Get crypto currency selected
* */
export const cryptoCurrencySelector = createSelector(
  selectCryptoCurrencyState,
  selectCurrentCurrency,
  (cryptoCurrencyState: CryptoCurrencyState, currentCurrency: string) => {
    const cryptoInfo = cryptoCurrencyState.selectedCryptoCurrency;
    if (cryptoInfo == null) {
      return null;
   }
    const bitcoinInfo = cryptoInfo.quote.BTC;
    const currencyDetail = cryptoInfo.quote[currentCurrency];

    return {
      id: cryptoInfo.id,
      cmc_rank: cryptoInfo.cmc_rank,
      name: cryptoInfo.name,
      symbol: cryptoInfo.symbol,

      price: formatNumberBasedOnCurrency(currencyDetail.price, currentCurrency),
      dayVolume: formatNumberBasedOnCurrency(currencyDetail.volume_24h, currentCurrency),
      marketCap: formatNumberBasedOnCurrency(currencyDetail.market_cap, currentCurrency),

      lastUpdated: cryptoInfo.last_updated,

      hourChange: currencyDetail.percent_change_1h.toFixed(2),
      dayChange: currencyDetail.percent_change_24h.toFixed(2),
      weekChange: currencyDetail.percent_change_7d.toFixed(2),

      totalSupply: cryptoInfo.total_supply,
      availableSupply: cryptoInfo.max_supply ? cryptoInfo.max_supply - cryptoInfo.total_supply : 'Not known',

      bitcoinPrice: bitcoinInfo ? bitcoinInfo.price : 'not supported',
    };
  }
);
