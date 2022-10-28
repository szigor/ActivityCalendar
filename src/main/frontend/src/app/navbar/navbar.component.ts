import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { ActivityDataService } from 'src/service/data/activity-data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  closeModalResult!: string

  time = {
    hour: 17,
    minute: 0
  }

  constructor(
    private router: Router,
    private modalService: NgbModal,
    private service: ActivityDataService
  ) { }

  ngOnInit(): void {
  }

  openAdd(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeModalResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeModalResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  onSubmitAdd(f: NgForm) {
    let dateForm: Date = new Date(f.controls['date'].value)
    dateForm.setHours(f.controls['time'].value.hour, f.controls['time'].value.minute)
    f.controls['date'].setValue(dateForm)
    this.service.saveActivity(f).subscribe(
      response => {
        window.location.reload()
      }
    )
    this.modalService.dismissAll();
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}
