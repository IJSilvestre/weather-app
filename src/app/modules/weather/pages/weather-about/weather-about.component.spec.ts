import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherAboutComponent } from './weather-about.component';

describe('WeatherAboutComponent', () => {
  let component: WeatherAboutComponent;
  let fixture: ComponentFixture<WeatherAboutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeatherAboutComponent]
    });
    fixture = TestBed.createComponent(WeatherAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
