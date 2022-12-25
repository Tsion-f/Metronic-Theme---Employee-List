import { Component, OnInit } from '@angular/core';
import { PEmployee } from '../Prana';
import { PEmployees } from '../PEmployees';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.scss']
})
export class AttendanceComponent implements OnInit  {

  Employees= PEmployees;

  masterSelected:boolean;
  checklist:any;
  checkedList:any;

  constructor(){}
  ngOnInit(): void {
   }




isAllSelected(){
  this.masterSelected = this.checklist.every(function(item:any) {
    return item.isSelected == true;
  })
}
checkUncheckAll(){
  for (var i = 0; i < this.checklist.length; i++) {
      this.checklist[i].isSelected = this.masterSelected;
    }
}

}
