import { Component, OnInit,Input } from '@angular/core';
import { Employee } from '../Employee';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,FormControl,FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.scss']
})
export class EditEmployeeComponent implements OnInit {

 @Input() Employee:Employee;
 EditEForm:FormGroup;


 constructor(private route:ActivatedRoute,public ems:EmployeeService, private router: Router, private fb:FormBuilder,public closeModal:NgbActiveModal) { }

  ngOnInit(): void {
    this.fetchEmployee();
    this.IntializingForm();
    this.route.url.subscribe(url=>{
      console.log(url);
    })
  }

  IntializingForm(){
      this.EditEForm=this.fb.group({
        name:[null],
        username:[null],
        phone:[null],
        website:[null],
        email:[null, Validators.required]
        // company:[null]
      });
  }


  fetchEmployee(){
  //Another way to fetch employee with out parmetrization

      this.ems.getanotherEmployee(this.Employee).subscribe(response=>{
      console.log(response);
      this.Employee=response;
  });
  }


  EditEmployee(value:Employee){
    console.log(value);
    if(this.Employee){
      this.ems.update(this.Employee).subscribe(response=>{
        console.log(response);
        this.Employee=response;

        Swal.fire({
                    title:'Thank you...',
                    text:'Form has been Updated succesfully!',
                    icon:'success',
                    confirmButtonColor:'#3085d6',
      })
      // this.OnSummit();
      });
    }
    this.close();

  }



  close(){
    this.closeModal.close();
  }

}
