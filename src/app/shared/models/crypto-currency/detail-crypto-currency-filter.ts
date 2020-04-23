export class DetailCryptoCurrencyFilter {
  filters = {
    id: null,
    convert: null
  };


  setId(id) {
    this.filters.id = id;
  }

  setCurrencyToConvert(currency: string) {
    this.filters.convert = currency;
  }
}
