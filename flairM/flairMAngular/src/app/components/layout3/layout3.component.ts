import { Component, OnInit } from '@angular/core';
import { ComponentsServiceService } from 'src/app/services/components-service.service';

@Component({
  selector: 'app-layout3',
  templateUrl: './layout3.component.html',
  styleUrls: ['./layout3.component.css']
})
export class Layout3Component implements OnInit {

  contactDetails: any;
  contactDetailsStatus : any;

  constructor(public _componentService: ComponentsServiceService) { }

  ngOnInit(): void {

    this.fetchContactDetails(); 
  }

  //fetch Cobatct details Coming from Layout 2 through Subject
  fetchContactDetails(){
    this._componentService.contactDetails.subscribe(data=>{
      if(data){
       
        this.contactDetails = data;
        this.contactDetailsStatus = true;
      }
    })
  }
}
