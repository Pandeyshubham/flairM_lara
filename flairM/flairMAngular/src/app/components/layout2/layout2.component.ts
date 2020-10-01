import { Component, OnInit } from '@angular/core';
import { Api } from 'src/app/services/api';
import { ComponentsServiceService } from 'src/app/services/components-service.service';


@Component({
  selector: 'app-layout2',
  templateUrl: './layout2.component.html',
  styleUrls: ['./layout2.component.css']
})
export class Layout2Component implements OnInit {

  orgDetails : any;
  contactList : any;
  organizationData:boolean = false;
  organizationAddData:boolean = false;
  contactForm:boolean =false;
  
  
  constructor(public _componentService:ComponentsServiceService, public api:Api) { }

  // On initialization of Page fetch The upcoming Organization details and Check if the Organization need to be add or not
  ngOnInit(): void {
    this.fetchOrganizationDetails();
    this.fetchOrganizationAddStatus();
    
  }

  // fetch organiation details coming from layout 1 through Subjects
  fetchOrganizationDetails(){
    this._componentService.orgDetails.subscribe(data=>{
      if(data){
        this.organizationAddData = false;
        this.organizationData = true;
        this.orgDetails = data;
      }
    })

    this.fetchContactList();
    
  }

  // Fetch if Organization need to be add
  fetchOrganizationAddStatus(){
    this._componentService.organizationAdd.subscribe(status=>{
      if(status === true){
        this.organizationData = false;
        this.organizationAddData = status;
      }
    });
  }

  // Onclcik Add Organiation and send data through API
  onClickSubmit(formData){
    console.log("The form", formData);
    this.api.addOrganization(formData).subscribe((response)=>{
      if(response['response']=='success'){
        this.contactForm = false;
        alert(response['response']);
      }else{
        alert(response['response']);
      }
    });
  }

  // fetch the Contact List
  fetchContactList()
  {
    this._componentService.contactList.subscribe(data=>{

        this.contactList = data;
    });
  }

  // Show Contact Form Change Status to true
  showContactForm()
  {
    this.contactForm = true;
  }


  // Add Contact through Form and Sedn data to API
  addContact(formData)
  {
    console.log("The form", formData);
    this.api.addContact(formData).subscribe((response)=>{
      if(response['response']=='success'){
        this.organizationData = false;
        alert(response['response']);
      }else{
        alert(response['response']);
      }
    });

  }

  contactDetails(oneContact)
  {
    this._componentService.contactDetails.next(oneContact);
  }



}
