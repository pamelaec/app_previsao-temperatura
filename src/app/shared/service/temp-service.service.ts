import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { ResultsModel } from '../model/results.model';
import { ForecastModel } from './../model/forecast.model';


@Injectable({
  providedIn: 'root'
})
export class TempServiceService {

  apiUrl = 'http://localhost:3000/results';

  http = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(
    private httpClient: HttpClient
  ) { }

  public getDados(key: string): Observable<ForecastModel>{
    return this.httpClient.get<ForecastModel>(this.apiUrl + '?key=' + key);   
  }

  public getDadosCidade(results: string): Observable<ResultsModel>{
    return this.httpClient.get<ResultsModel>(this.apiUrl + '?key=' + results);   
  }
   
}
