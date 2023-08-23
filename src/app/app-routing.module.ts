import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherHomeComponent } from './modules/weather/pages/weather-home/weather-home.component';
import { WeatherAboutComponent } from './modules/weather/pages/weather-about/weather-about.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'weather' },
  { path: 'weather', component: WeatherHomeComponent },
  { path: 'weather-about', component: WeatherAboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
