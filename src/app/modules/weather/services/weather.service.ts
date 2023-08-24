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
    return this.httpClient.get(
      `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${this.apiKey}`
    );
  }
}
