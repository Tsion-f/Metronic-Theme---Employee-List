import { Component, OnInit } from '@angular/core';
import { Employee } from '../Employee';
import { EmployeeService } from '../employee.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EmployeeDetailComponent } from '../employee-detail/employee-detail.component';
import {NgbPaginationConfig} from '@ng-bootstrap/ng-bootstrap';
import { EditEmployeeComponent } from '../edit-employee/edit-employee.component';
import { ActivatedRoute } from '@angular/router';
import { AddEmployeeComponent } from '../add-employee/add-employee.component';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  Employees:Employee[];

  // Not using the unedrneath 'EmployeeList$' because certain features stop working
  EmployeeList$ = this.employeeService.employees$;
  Employee:Employee;
  page:number = 2;
  pageSize :any;

  constructor(public employeeService:EmployeeService,
    public modalService:NgbModal,
    private route:ActivatedRoute,
    config: NgbPaginationConfig) {

      // customize default values of paginations used by this component tree
      config.size = 'sm';
      config.boundaryLinks = true;
   }

  ngOnInit(): void {
      this.fetchEmployees();
  }

  fetchEmployees(){
    this.employeeService.fetchEmployees().subscribe(response=>this.Employees=response);
  }

  confirm(Employee:Employee){
    Swal.fire({
      title: 'Are you sure you want to delete this customer?',
      text: 'Ha?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it',
      confirmButtonColor: '#3085d6',
    }).then((result) => {
      if (result.value) {
        console.log(result);
        this.Delete(Employee);
      } else {
        Swal.fire({
          icon:'error',
          title:'cancelled',
          text: 'The Customer and it is data is safe :)',
          confirmButtonColor: '#3085d6',
        })
      }
    })
  }

  Delete(Employee:Employee){
    this.Employees=this.Employees.filter(Employees=>Employee !== Employees);
    console.log(this.Employees);

    Swal.fire({
      title:'Deleted',
      // text: 'The Customer and it is data is safe :)',
      icon:'success',
      confirmButtonColor: '#3085d6',
    })
  }

  ConfirmDeletion(){
    Swal.fire({
      title: 'Are you sure you want to delete this customer?',
      text: 'This action must be approved from an administrator to procceed with your request!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it',
      confirmButtonColor: '#3085d6',

    }).then((result)=>{
      if(result.value){
        this.DeleteAll();
      } else{
        Swal.fire({
          icon:'error',
          title:'cancelled',
          text: 'Your Imaginary data is safe :)',
          confirmButtonColor: '#3085d6',
        })
      }
    })
  }

  DeleteAll(){
    this.Employees.length=0;
  }

  //modal for detail view
  open(Employee:Employee){
    console.log(Employee);
    const modalReference=this.modalService.open(EmployeeDetailComponent,{
      size: 'sm',
      centered: true,
      backdropClass: 'light-blue-backdrop'
    });
    modalReference.componentInstance.detail=Employee;
  }

  //Modal for the edit
  OpenEdit(Employee:Employee){
    console.log(Employee.id);
    const editModal=this.modalService.open(EditEmployeeComponent);
    editModal.componentInstance.Employee=Employee;
  }

  //Modal for Adding Employee
  openAdd(){
   this.modalService.open(AddEmployeeComponent);
  }

}
