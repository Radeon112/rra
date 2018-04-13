import { Injectable } from '@angular/core';

import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  result: any;

  constructor(private _http: Http) { }

  getUsers() {
    const headers = new Headers();
    // TODO
    headers.append('Access-Control-Allow-Origin', '*');
    const options = new RequestOptions({ headers: headers });

    return this._http.get('http://localhost:3000/api/users', options)
      .map(result => this.result = result.json().data);
  }
}
