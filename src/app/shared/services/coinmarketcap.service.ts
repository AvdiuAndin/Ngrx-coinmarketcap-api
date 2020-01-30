import {Injectable} from '@angular/core';
import {RestService} from './rest.service';
import {environment} from '../../../environments/environment';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { HttpMethod } from '../contants/http-method.enum';
import {CoinMarketCapApiEndpointsContants} from '../contants/coin-market-cap-api-endpoints.contants';
import {isEmpty} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoinmarketcapService {

  apiKey = environment.coinMarketCap.apiKey;

  constructor(private restService: RestService, private http: HttpClient) {}

  public getListOfCryptocurrencies(queryParamsObj: object) {
    const options = this.addQueryParameters(queryParamsObj);
    return this.request(HttpMethod.GET, CoinMarketCapApiEndpointsContants.GET_CRYPTOCURRENCY_LIST(), { params: options });
    // return this.http.get('/assets/data.json');
  }

  public getCryptoCurrencyById(queryParamsObj: object) {
    const options = this.addQueryParameters(queryParamsObj);
    return this.request(HttpMethod.GET, CoinMarketCapApiEndpointsContants.GET_CRYPTOCURRENCY_DETAIL(), { params: options });
  }

  private addDefaultHeaders() {
    return {
      headers: {
        'X-CMC_PRO_API_KEY': this.apiKey,
        Accept: 'application/json',
        'Accept-Encoding': 'deflate, gzip'
      }
    };
  }

  private addQueryParameters(params: any  ) {
    // delete action type attribute
    if (params.type) {
      delete params.type;
    }
    return Object.keys(params).length > 0 ? this.restService.formatQueryParams(params) : {};
  }

  private request(method: HttpMethod, url: string, options?: object): Observable<any> {
    const defaultHeader = this.addDefaultHeaders();
    const finalOptions = Object.assign(defaultHeader, options);
    return this.restService.request(method, url, finalOptions);
  }
}
