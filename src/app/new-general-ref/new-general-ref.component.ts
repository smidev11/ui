import { Component, OnInit } from '@angular/core';
import { ValidationConst } from '../util/ValidationConstant';
import { ValidationUtil } from '../util/ValidationUtil';
import { APIServiceService } from '../apiservice.service';

@Component({
  selector: 'app-new-general-ref',
  templateUrl: './new-general-ref.component.html',
  styleUrls: ['./new-general-ref.component.scss']
})
export class NewGeneralRefComponent implements OnInit {

 
  
  constructor(apiService:APIServiceService) { }
  public data = {clientName: '', clientAddress: '', jobDate:'', pono:'',PartNO:''}
 
  ngOnInit() {
  }

  validateData() {
    const validationData = {
      clientName : {  validations: [ValidationConst.EMPTY_CHECK], error:'Enter client name', value: this.data.clientName},
      clientAddress : { validations: [ValidationConst.EMPTY_CHECK], data:'Enter  client address', value: this.data.clientName, error:'Enter client address'},
      jobDate : {  validations: [ValidationConst.DATE_CHECK], data:'Select date', value: this.data.jobDate, error:'Select job date'},
      pono : {  validations: [ValidationConst.EMPTY_CHECK], data:'Enter PO Number', value: this.data.pono, error:'Enter PO number'},
      PartNO : {  validations: [ValidationConst.EMPTY_CHECK], data:'', value: this.data.PartNO, error:'Enter part number'}, 
    }
    const result:any[] = ValidationUtil.validateForm(validationData);
    if(result.length > 0 ) {
      ValidationUtil.showNotification(result);
    }
  }

}
