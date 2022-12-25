import { Component, OnInit } from '@angular/core';
import { Employee} from '../../Employee';
import { EmployeeService } from '../../employee.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EmployeeDetailComponent } from '../../employee-detail/employee-detail.component';
import { NgbPaginationConfig} from '@ng-bootstrap/ng-bootstrap';
import { EditEmployeeComponent } from '../../edit-employee/edit-employee.component';
import { ActivatedRoute } from '@angular/router';
import { AddEmployeeComponent } from '../../add-employee/add-employee.component';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-employee2',
  templateUrl: './employee2.component.html',
  styleUrls: ['./employee2.component.scss']
})
export class Employee2Component implements OnInit {
  Employees:Employee[];

  constructor( public ems:EmployeeService,
    public modalService:NgbModal,
    private route:ActivatedRoute,
    config: NgbPaginationConfig) { }

  ngOnInit(): void {
    this.fetchEmployees();
  }

  fetchEmployees(){
    this.ems.fetchEmployees().subscribe((response: Employee[])=>{
      console.log(response);
      this.Employees=response.slice(5,10);
    });
  }

  confirm(Employee:Employee){
    Swal.fire({
      title: 'Are you sure yow want to delete this customer?',
      text: 'This action must be approved from an administrator to procceed with your request!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        console.log(result);
        this.Delete(Employee);
      } else {

        Swal.fire(
          'Cancelled',
          'The Customer and it is data is safe :)',
          'error'
        )
      }
    })
  }

  Delete(Employee:Employee){
    this.Employees=this.Employees.filter(Employees=>Employee !== Employees);
    console.log(this.Employees);

    Swal.fire(
      'Deleted',
      'The Customer and it is data is safe :)',
      'success'
    )}

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
    let addModal=this.modalService.open(AddEmployeeComponent);
  }
}
