import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private serv:WeatherService){}
  ngOnInit(): void {
    this.serv.getWeatherData('Mumbai').subscribe({
      next:(Response)=>{
        console.log(Response)
      }
    })
  }
  title = 'Weather-App';
  city:string='';

  getWeather(){
    console.log(this.city)
  }
}
