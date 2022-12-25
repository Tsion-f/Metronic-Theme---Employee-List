import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-edit-role',
  templateUrl: './edit-role.component.html',
  styleUrls: ['./edit-role.component.scss']
})
export class EditRoleComponent implements OnInit {

  constructor(private closeModal:NgbActiveModal) { }

  ngOnInit(): void {
  }
//TODO
  EditRole(){
    Swal.fire(
      'Thank you...', 'Form has been submitted succesfully!', 'success');
  }

  Discard(){
    Swal.fire({
      text: 'Are you sure you would like to cancel?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, cancel it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        console.log(result);

      } else {
        Swal.fire(
          'Canceled',
          'Your form has not been canceled!',
          'error'
        )
      }
    })
  }

  close(){
    this.closeModal.close();
  }
}
