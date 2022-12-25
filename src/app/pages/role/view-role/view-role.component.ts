import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditRoleComponent } from '../edit-role/edit-role.component';

@Component({
  selector: 'app-view-role',
  templateUrl: './view-role.component.html',
  styleUrls: ['./view-role.component.scss']
})
export class ViewRoleComponent implements OnInit {

  constructor(private modalService:NgbModal) { }
  page = 4;

  ngOnInit(): void {
  }


  OpenEdit(){
    const EditForm=this.modalService.open(EditRoleComponent);
  }
}
