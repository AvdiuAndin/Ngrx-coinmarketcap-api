export class DetailCryptoCurrencyFilter {
  filters = {
    id: null,
    // tslint:disable-next-line:max-line-length
    convert: null
  };


  setId(id) {
    this.filters.id = id;
  }

  setCurrencyToConvert(currency: string) {
    this.filters.convert = currency;
  }
}
