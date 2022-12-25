import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-role',
  templateUrl: './add-role.component.html',
  styleUrls: ['./add-role.component.scss']
})
export class AddRoleComponent implements OnInit {

  constructor(public closeModal:NgbActiveModal) { }

  ngOnInit(): void {
  }

  AddRole(){
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


