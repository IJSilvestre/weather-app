import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { WeatherHomeComponent } from './modules/weather/pages/weather-home/weather-home.component';
import { WeatherAboutComponent } from './modules/weather/pages/weather-about/weather-about.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ErrorPageComponent } from './error-page/error-page.component';
import { FormsModule } from '@angular/forms';
import { WeatherCardComponent } from './modules/weather/component/weather-card/weather-card.component';

@NgModule({
  declarations: [AppComponent, WeatherHomeComponent, WeatherAboutComponent, ErrorPageComponent, WeatherCardComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
