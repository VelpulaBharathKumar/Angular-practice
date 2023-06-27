import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  weatherData:any;
  currentDateTime:any;
  constructor(private serv:WeatherService,public datepipe: DatePipe){    this.currentDateTime =this.datepipe.transform((new Date), 'MM/dd/yyyy h:mm:ss');
}
  ngOnInit(): void {
    
  }
  title = 'Weather-App';
  city:string='';

  getWeather(){
    console.log(this.city)
    this.serv.getWeatherData(this.city).subscribe({
      next:(Response)=>{
        console.log(Response)
        this.weatherData=Response;
      }
    })
  }
}
