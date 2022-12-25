import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../Employee';
import { FormBuilder,FormGroup,FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
  const isSubmitted = form && form.submitted;
  return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}


@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {
  AddEForm: FormGroup;
  Employees:Employee[]=[];
  matcher = new MyErrorStateMatcher();

  constructor(private fb:FormBuilder,
              public employeeService:EmployeeService,
              public activeModal:NgbActiveModal,
              public router:Router) { }

  ngOnInit(): void {
    this.IntializeForm();
  }

  IntializeForm(){
    this.AddEForm=this.fb.group({
      name:[null, Validators.required],
      username:[null, Validators.required],
      phone:[null, [Validators.required,Validators.pattern("[0-9]{10}")]],
      website:[null,Validators.required],
      email:[null, [Validators.required, Validators.email]]
    });

    this.AddEForm.get('name')?.valueChanges.subscribe(changes=> {console.log(changes)});
  }


  AddEmployee(value:any){
    console.log(this.AddEForm.valid);

    if(this.AddEForm.valid === true){
    this.employeeService.AddEmployee(value).subscribe(response=>{
      console.log(response);
      this.Employees.push(response);
      console.log(this.Employees);

      Swal.fire( {
        title:'Thank you...',
        text:'Form has been Added succesfully!',
        icon:'success',
        confirmButtonColor:'#3085d6'
      })

      this.closeForm();
      this.router.navigateByUrl('/Employee');
      });
  } else {

    Swal.fire({
      title: 'OOPS!..',
      text: 'Kindly fill in the form with the correct data!!',
      icon:'error',
      confirmButtonColor:'#3085d6'
    })

  }

  //What is the purpose of this code?
    for (const i in this.AddEForm.controls){
      this.AddEForm.controls[i].markAsDirty();
      this.AddEForm.controls[i].updateValueAndValidity();
    }
  }


  closeForm(){
    console.log(this.activeModal);
    this.activeModal.close();
    }

  Department = [
    { id: 1, name: "Sales" },
    { id: 2, name: "Marketing" },
    { id: 3, name: "Information Technology" },
    { id: 4, name: "Event Organizer" },
    { id: 5, name: "Intern" },
  ];



}
