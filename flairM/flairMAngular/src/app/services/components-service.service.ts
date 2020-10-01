import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComponentsServiceService {

  orgDetails = new Subject<any>();
  organizationAdd = new Subject<boolean>();
  contactList = new Subject<any>();
  contactDetails = new Subject<any>();

  constructor() { 
  }
}
