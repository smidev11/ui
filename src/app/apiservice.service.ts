import { Injectable } from '@angular/core';

import { HttpClient} from  '@angular/common/http';

import {Observable} from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class APIServiceService {
  

  constructor(private http:HttpClient) {}
  getJobs() {
    return this.http.get('/api/job');
  }

  newJob(data) {
    return this.http.get('http://localhost:3010/job');
  }
}
