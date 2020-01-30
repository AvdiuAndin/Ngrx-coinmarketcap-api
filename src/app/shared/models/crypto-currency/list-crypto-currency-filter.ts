export class ListCryptoCurrencyFilter {
  filters = {
    start: 1,
    limit: 100,
    convert: 'USD'
  }


  setCurrencyToConvert(currency: string) {
    this.filters.convert = currency;
  }
}


