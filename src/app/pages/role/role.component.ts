import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddRoleComponent } from './add-role/add-role.component';
import { EditRoleComponent } from './edit-role/edit-role.component';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss']
})
export class RoleComponent implements OnInit {


  constructor(private modalService:NgbModal) { }

  ngOnInit(): void {
  }

  openAdd(){
    const AddForm=this.modalService.open(AddRoleComponent);
  }
  OpenEdit(){
    const EditForm=this.modalService.open(EditRoleComponent);
  }

  Cards = [
    {
      title:'Event Organizers',
      quantity:'2',
      permission: [
        {name:'No Admin Controls'},
        {name:'View Financial Summaries only'},
        {name:'Use companies resources'},
        {name:'Organize Events'},
      ],
     },

     {
      title:'Marketing and Sales',
      quantity:'5',
      permission: [
        {name:'No Admin Controls'},
        {name:'View Financial Summaries only'},
        {name:'View and Edit Reports'},
        {name:'View Payout only'},
      ],
     },

     {
      title:'Management',
      quantity:'4',
      permission: [
       {name:'All Admin Controls'},
       {name:'View and Edit Financial Summaries'},
       {name:'Enabled Bulk Report'},
       {name:'View and update the organiztion system'},
     ],
     },

     {
      title:'Information Technology',
      quantity:'6',
      permission: [
        {name:'No Admin Controls'},
        {name:'Analyze system failures'},
        {name:'View and Edit API controls'},
        {name:'View Payout only'},
      ],
     },

     {
      title:'Finance',
      quantity:'3',
      permission: [
        {name:' Admin Controls'},
        {name:'Construct Financial Summaries'},
        {name:'Enabled Bulk Report'},
        {name:'View Disputes only'},
      ],
     }
    ];


}

