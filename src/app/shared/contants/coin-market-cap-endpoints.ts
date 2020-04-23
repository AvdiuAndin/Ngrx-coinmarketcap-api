let url = 'https://pro-api.coinmarketcap.com/v1';
let cryptocurrency = 'cryptocurrency';

export const coinMarketCapEndpoints = {
  URL: url,
  CRYPTOCURRENCY: cryptocurrency,
  BASE_URL: url,
  CRYPTOCURRENCY_LIST: `${url}/${cryptocurrency}/listings/latest`,
  CRYPTOCURRENCY_DETAIL: `${url}/${cryptocurrency}/quotes/latest`
};
