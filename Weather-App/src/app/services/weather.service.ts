import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments.ts/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
url:string=environment.weatherApiBaseUrl;
constructor(private http:HttpClient) {

}
getWeatherData(cityName:string) :Observable<any>{
  return this.http.get(`${this.url}${cityName}`,{headers:new HttpHeaders().set(environment.XRapidAPIHostLabel,environment.value2).set(environment.XRapidAPIKeyLabel,environment.value1)})
}
}


