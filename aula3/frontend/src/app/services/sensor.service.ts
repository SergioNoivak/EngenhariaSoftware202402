import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SensorService {
  API_URL = 'http://localhost:3000';
  constructor(private http : HttpClient) { }

  getSensorData():Observable<any>{
    return this.http.get(this.API_URL+"/sensor-data");
  }

}
