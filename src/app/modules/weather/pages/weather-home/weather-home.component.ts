import { Component, OnDestroy, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { WeatherData } from 'src/app/models/interfaces/WeatherData';
import { Subject, takeUntil } from 'rxjs';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-weather-home',
  templateUrl: './weather-home.component.html',
  styleUrls: ['./weather-home.component.scss'],
})
export class WeatherHomeComponent implements OnDestroy, OnInit {
  private readonly destroy$: Subject<void> = new Subject();
  weatherData!: WeatherData;
  cityName: string = 'Goiânia';
  searchIcon = faMagnifyingGlass;

  constructor(private weatherService: WeatherService) {}
  ngOnInit(): void {
    this.getWeaather('goiania');
  }

  getWeaather(cityName: string): void {
    this.weatherService
      .getWeatherData(cityName)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (res) => {
          res && (this.weatherData = res);
          console.log(this.weatherData)
         },
        error: (error) => console.log(error),
      });
  }

  onSubmit(): void {
    this.getWeaather(this.cityName);
    this.cityName = ''
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
    console.log('desmontado');
  }
}
