import { Component, OnInit } from '@angular/core';
import { Api } from 'src/app/services/api';
import { ComponentsServiceService } from 'src/app/services/components-service.service';
import { Organization } from 'src/app/services/interface';


@Component({
  selector: 'app-layout1',
  templateUrl: './layout1.component.html',
  styleUrls: ['./layout1.component.css']
})
export class Layout1Component implements OnInit {

  organizations: any;
  organizationStatus:boolean = false;
  organizationAdd:boolean = false;
  contactDetailsStatus:boolean =false;

  constructor(private api:Api, public _componentService:ComponentsServiceService) { }

  //Get List of Added Organization on page initialization
  ngOnInit(): void {

    this.api.getOrganizationList().subscribe((data)=>{
      this.organizationStatus = true;
      this.organizations = data['response'];
    })
  }


  //Get the Organization Detail on Button Click
  organizationDetail(oneOrganizationData)
  {
    this._componentService.orgDetails.next(oneOrganizationData);
    this.getContactList(oneOrganizationData.organization_id);
  }


  //Get the complete List of Contacts
  getContactList(organization_id)
  {
    this.api.getContactList(organization_id).subscribe((response)=>{
      console.log(response)
      this._componentService.contactList.next(response['response']);
    });
  }
  

  // Add Organization
  addOrganization()
  {
    this.organizationAdd = true;
    this.contactDetailsStatus = false;

    this._componentService.organizationAdd.next(this.organizationAdd);
  }

}
