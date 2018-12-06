import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { APIServiceService } from '../apiservice.service';
import {Observable} from 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';
declare var $: any;
@Component({
  selector: 'app-general-reference',
  templateUrl: './general-reference.component.html',
  styleUrls: ['./general-reference.component.scss']
})
export class GeneralReferenceComponent implements OnInit {

  public data;
  public isEditStart:boolean = false;
  public oriObject:any = {};
  
  constructor(private apiService:APIServiceService) { 
    
  }

  ngOnInit() {
     // for (let i=1;i<5;i++) {
     //   let obj = {id:i, clientName: "testName" + i, TCNO: 25 + i, startDate: 'PM'} 
     //   this.data.push(obj);
    // }
    this.getJobs();
  }
  
  getJobs() {
    this.apiService.getJobs().subscribe((data:  Array<object>) => {
      this.data  =  data;
      console.log(data);
    });
  }
}
