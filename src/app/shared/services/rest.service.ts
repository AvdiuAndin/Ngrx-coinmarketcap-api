import { Injectable } from '@angular/core';
import {HttpClient, HttpParams, HttpRequest} from '@angular/common/http';
import {HttpMethod} from '../contants/http-method.enum';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private httpClient: HttpClient) { }

  public request<T>(method: HttpMethod, url: string, options: {}) {
    return this.httpClient.request(method, url, options);
  }

  public formatQueryParams(obj: object) {
    const finalOptions = {};
    // tslint:disable-next-line:forin
    for (const objKey in obj) {
      finalOptions[objKey] = obj[objKey];
    }
    return finalOptions;
  }
}
