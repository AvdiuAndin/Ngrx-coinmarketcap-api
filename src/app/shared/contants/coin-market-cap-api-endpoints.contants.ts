export const CoinMarketCapApiEndpointsContants = {
  URL: 'https://pro-api.coinmarketcap.com/v1' ,
  CRYPTOCURRENCY: 'cryptocurrency',
  GET_BASE_URL() {
    return `${this.URL}`;
  },
  GET_CRYPTOCURRENCY_LIST() {
    return `${this.GET_BASE_URL()}/${this.CRYPTOCURRENCY}/listings/latest`;
  },
  GET_CRYPTOCURRENCY_DETAIL() {
    return `${this.GET_BASE_URL()}/${this.CRYPTOCURRENCY}/quotes/latest`;
  }

};
