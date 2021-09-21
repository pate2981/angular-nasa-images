import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NasaImage } from '../models/nasa-image';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class NasaImageService {
  constructor(private httpClient: HttpClient) { }
  
  getImages(): Observable<NasaImage[]> {
    return this.httpClient.get<NasaImage[]>('https://api.nasa.gov/planetary/apod?count=30&api_key=krzk5FkNUeYguGkMc4Fb00rh72MY3O7CEtmwgWUA');
  }
}