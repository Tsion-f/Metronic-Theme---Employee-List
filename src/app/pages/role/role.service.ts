import { Injectable } from '@angular/core';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor( public location:Location) { }


  goBack(){
    this.location.back();
  }
}
