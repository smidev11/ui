import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-activation',
  templateUrl: './activation.component.html',
  styleUrls: ['./activation.component.scss']
})
export class ActivationComponent implements OnInit {

  public data:any[] = [];
  public isEditStart:boolean = false;
  public oriObject:any = {};
  constructor() { }

  ngOnInit() {
    for (let i=1;i<5;i++) {
       let obj = {id:i, name: "testName" + i, age: 25 + i, emp: 'PM', score1: 100, score2:200, total: 0, editMode: false} 
       this.data.push(obj);
    }
  }

  edit(obj) {
    if (this.isEditStart) {
      return;
    }
    const index = this.getDataIndex(obj);
    this.data[index].edit = true;
    this.isEditStart = true;
    this.oriObject = Object.assign({}, obj);
  }
  save(obj) {
    const index = this.getDataIndex(obj);
    this.data[index].edit = false;
    this.isEditStart = false;
    this.showNotification('top','right');
  }

  cancel(obj) {
    const index = this.getDataIndex(obj);
    this.data[index] = Object.assign({}, this.oriObject);
    this.data[index].edit = false;
    this.oriObject = {};
    this.isEditStart = false;
  }

  getDataIndex(obj) {
    return this.data.findIndex(x => x.id== obj.id);
  }

  onBlur(obj) {
    obj.total = obj.score1 + obj.score2;
  }

  createEmptyObject() {
    let obj = {id: this.data.length + 1 , name: '', age: 0, emp: 'PM', score1: 0, score2: 0, total: 0, editMode: false};
    this.data.push(obj);
  }


  showNotification(from, align){
    const type = ['','info','success','warning','danger'];

    const color = Math.floor((Math.random() * 4) + 1);

    $.notify({
        icon: "notifications",
        message: "Record Save successfully...."

    },{
        type: type[2],
        timer: 4000,
        placement: {
            from: from,
            align: align
        },
        template: '<div data-notify="container" class="col-xl-4 col-lg-4 col-11 col-sm-4 col-md-4 alert alert-{0} alert-with-icon" role="alert">' +
          '<button mat-button  type="button" aria-hidden="true" class="close mat-button" data-notify="dismiss">  <i class="material-icons">close</i></button>' +
          '<i class="material-icons" data-notify="icon">notifications</i> ' +
          '<span data-notify="title">{1}</span> ' +
          '<span data-notify="message">{2}</span>' +
          '<div class="progress" data-notify="progressbar">' +
            '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
          '</div>' +
          '<a href="{3}" target="{4}" data-notify="url"></a>' +
        '</div>'
    });
}
}