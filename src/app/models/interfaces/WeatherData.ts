export interface WeatherData {
  coord: { lon: number; lat: number };

  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    }
  ];
  base: string;

  clouds: {
    all: number;
  };

  main: {
    humidity: number;
    feels_like: number;
    temp: number;
    temp_max: number;
    temp_min: number;
    pressure: number;
  };

  visibility: number;

  wind: {
    deg: number;
    speed: number;
  };

  sys: {
    country: string;
    id: number;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  name: string;
  id: number;
}
