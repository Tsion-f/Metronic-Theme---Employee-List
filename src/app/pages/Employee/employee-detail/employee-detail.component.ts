import { Component, OnInit,Input } from '@angular/core';
import{ Employee} from '../Employee';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.scss']
})
export class EmployeeDetailComponent implements OnInit {
  @Input() detail:Employee;

  constructor(private route:ActivatedRoute,public ems:EmployeeService,private closeModule:NgbActiveModal) { }

  ngOnInit(): void {

 
    // this.FetchEmployee();
  }



  //The parent component already passed the specific Employee selezih no need to find employee with id

  // FetchEmployee(){
  //   let tracedEmployee=Number(this.route.snapshot.paramMap.get('id'));
  //   console.log(tracedEmployee);
  //   this.ems.getEmployee(tracedEmployee).subscribe(response =>{
  //     console.log(response);
  //     this.detail=response;
  //   });
  // }





  //Figure out close later
  close(){
      this.closeModule.close('Close click');
  }

}
