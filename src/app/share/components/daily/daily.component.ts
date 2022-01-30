import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../servise/weather.service';

@Component({
  selector: 'app-daily',
  templateUrl: './daily.component.html',
  styleUrls: ['./daily.component.scss']
})
export class DailyComponent implements OnInit {

  constructor(public weather: WeatherService) { }

  ngOnInit(): void {
  }

}
