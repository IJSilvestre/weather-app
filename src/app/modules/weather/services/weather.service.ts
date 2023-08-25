import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private apiKey: string = '746b33081bcb1cec74aeb3d8d9612de8';

  constructor(private httpClient: HttpClient) {}
  getWeatherData(lat: string, lon: string): Observable<any> {
    console.log(lat, lon)
    return this.httpClient.get(
      // `https://api.openweathermap.org/data/3.0/onecall?lat=-16.63401602789569&lon=-49.209006296451584&exclude=hourly,daily&appid=${this.apiKey}`
      `https://viacep.com.br/ws/74884655/json/`
    );
  }
}
