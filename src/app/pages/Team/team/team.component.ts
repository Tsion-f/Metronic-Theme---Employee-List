import { Component,Input} from "@angular/core";
import { PEmployee } from "../../Employee/Prana";
import { PEmployees } from "../../Employee/PEmployees";

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent {

  Employees= PEmployees;
  @Input() color: string = '';
  @Input() avatar: string = '';


 constructor() {
 }

 Department=['All','Event Organizer','Marketing','Sales','IT','Management','Finance' ];

}
