import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }
  baseUrl = "http://rapidtrade-env.eba-srm6cfm6.ap-northeast-1.elasticbeanstalk.com/";
  url = "";

  getAllTrade():Observable<any>
  {
    // this.url="https://fast-trade.azurewebsites.net/home";
    this.url="http://rapidtrade-env.eba-srm6cfm6.ap-northeast-1.elasticbeanstalk.com/home";
    return this.http.get(this.url);
  }

  getDetails(symbol:string):Observable<any>
  {
    // this.url="https://fast-trade.azurewebsites.net/details?symbol="+symbol;
    this.url="http://rapidtrade-env.eba-srm6cfm6.ap-northeast-1.elasticbeanstalk.com/details?symbol="+symbol;
    return this.http.get(this.url);
  }
}
