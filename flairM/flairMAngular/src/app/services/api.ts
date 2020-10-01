import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constants } from '../config/config';

@Injectable()

export class Api{
    
    constructor(private http:HttpClient){
    
    }

    createHeaders(headers: Headers) {
    // if(localStorage.getItem(Constants.TOKEN))
    //     headers.append('token', localStorage.getItem(Constants.TOKEN));
    }

    getOrganizationList(){
        return this.http.get(Constants.baseUrl+'organization/list')
    }

    addOrganization(orgFormData)
    {
        let headers = new Headers();
        this.createHeaders(headers);
        headers.append("Content-Type","application/json")

        return this.http.post(Constants.baseUrl+'organization/add', orgFormData)
    }

    addContact(contactFormData)
    {
        let headers = new Headers();
        this.createHeaders(headers);
        headers.append("Content-Type","application/json")

        return this.http.post(Constants.baseUrl+'contact/add', contactFormData)
    }

    getContactList(organization_id){
        return this.http.get(Constants.baseUrl+'contact/byorganizationid/'+organization_id)
    }
  }
