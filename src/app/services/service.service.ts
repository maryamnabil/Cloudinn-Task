import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ServiceService {

  constructor(private http: HttpClient) { }

// Get All people in the api provided with all thier information
  GetAllPeople(){
    return this.http.get('https://swapi.co/api/people/');        
  }



}
