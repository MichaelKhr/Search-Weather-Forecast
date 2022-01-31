import { Component, OnDestroy, OnInit } from '@angular/core';
import { map, Subscription } from 'rxjs';
import { ThemesService } from '../../../ngprime/themes.service';
import { WeatherService } from '../../servise/weather.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit, OnDestroy {
  darkModeActive: boolean = false;
  visibleSidebar: boolean = false;
  searchValue: string = ''
  loading: boolean = false;
  cityError: boolean = false;
  subNow!: Subscription

  constructor(
    private themes: ThemesService,
    public weather: WeatherService
  ) { }

  ngOnInit(): void {

  }

  toAnotherTheme() {
    if (this.darkModeActive) {
      this.themes.changeTheme('arya-orange')

    } else {
      this.themes.changeTheme('saga-orange')
    }

  }

  searchCity() {
    this.loading = true
    this.cityError = false



    this.subNow = this.weather.getWeather(this.searchValue)
      .pipe(
        map(item => item.daily)
      )
      .subscribe(data => {
        this.loading = false
        this.cityError = false;
        console.log(data);
        this.weather.weatherForWeek = data
      }, err => {
        this.cityError = true
      })
  }

  ngOnDestroy(): void {
    if (this.subNow) {
      this.subNow.unsubscribe
    }
  }
}
