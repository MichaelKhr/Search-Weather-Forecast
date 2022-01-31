import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map, Observable, switchMap } from 'rxjs';

export interface WeatherCard {
  coord: {
    lat: number,
    lon: number
  }
  weather: [{
    main: string,
    description: string
  }],
  main: { temp: number, feels_like: number, temp_min: number, temp_max: number },
  wind: { speed: number },
  name: string

}

export interface DailyWeather {
  daily: [
    Daily
  ]
}

export interface Daily {
  temp: {
    day: number,
    night: number,
    eve: number,
    morn: number,
    min: number,
    max: number
  },
  feels_like: {
    day: number,
    night: number,
    eve: number,
    morn: number,
  },
  wind_speed: number,
  weather: [
    {
      main: string,
      description: string
    }
  ]
}

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  weatherNow!: WeatherCard
  weatherForWeek!: Daily[]

  constructor(private http: HttpClient) {

  }

  getWeather(city: string): Observable<DailyWeather> {
    return this.http.get<WeatherCard>(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d20ca93f08a1e64fca094bbf72c1b127&units=metric`)
      .pipe(
        switchMap(data => {
          this.weatherNow = data
          console.log(data);

          return this.getAllWeather(data.coord.lat, data.coord.lon)
        })
      )
  }

  getAllWeather(lat: number, lon: number): Observable<DailyWeather> {

    return this.http.get<DailyWeather>(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts&appid=d20ca93f08a1e64fca094bbf72c1b127&units=metric`)

  }
}
