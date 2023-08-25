import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-weather-home',
  templateUrl: './weather-home.component.html',
  styleUrls: ['./weather-home.component.scss'],
})
export class WeatherHomeComponent implements OnInit {
  constructor(private weatherService: WeatherService) {}
  getWeaather(lat: string, lon: string): void {
    this.weatherService.getWeatherData(lat, lon).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (error) => console.log(error),
    });
  }

  ngOnInit(): void {
    this.getWeaather('-16.63401602789569', '-49.209006296451584');

  }
}
