import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherDatas } from 'src/app/models/interfaces/WeatherDatas';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey = '6b6b65abf9b3af445241af1915793630';

  constructor(private http: HttpClient) { }

  getWeatherDatas(cityName: string): Observable<WeatherDatas> {
    return this.http.get<WeatherDatas>(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&mode=json&appid=${this.apiKey}`, {})
  }
}
