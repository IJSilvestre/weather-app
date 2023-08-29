import { Component, Input, OnInit } from '@angular/core';
import {
  faDroplet,
  faTemperatureHigh,
  faTemperatureLow,
  faWind,
} from '@fortawesome/free-solid-svg-icons';
import { WeatherData } from 'src/app/models/interfaces/WeatherData';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss'],
})
export class WeatherCardComponent {
  @Input() weatherDataCard!: WeatherData;

  minTemperatureIcon = faTemperatureLow;
  maxTemperatureIcon = faTemperatureHigh;
  homidtyIcon = faDroplet;
  windIcon = faWind;
}
