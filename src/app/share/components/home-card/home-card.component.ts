import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../servise/weather.service';

@Component({
  selector: 'app-home-card',
  templateUrl: './home-card.component.html',
  styleUrls: ['./home-card.component.scss']
})
export class HomeCardComponent implements OnInit {

  constructor(
    public weather: WeatherService
  ) { }

  ngOnInit(): void {
  }

}
