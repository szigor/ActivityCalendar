import { Component, OnInit } from '@angular/core';
import { Activity, ActivityDataService, Participant } from 'src/service/data/activity-data.service';
import { formatDate } from '@angular/common';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http'


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  //home page
  activities!:Array<Activity>
  week!:Array<Date>
  week1!:Array<Date>
  week2!:Array<Date>
  dateNow = new Date()

  dayNumber:number = 14

  //add activity modal
  closeModalResult!: string

  time = {
    hour: 17,
    minute: 0
  }

  //activity modal
  activity: Activity = new Activity(-1, 's', 's', this.dateNow, [new Participant(-1, 's', 's')]) // w celu unikniecia bledu
  /* activity!: Activity */
  takePartBoolean: boolean = false
  

  constructor(
    private service: ActivityDataService,
    private modalService: NgbModal,
    private http: HttpClient
  ) { }

  ngOnInit(): void {

    this.getActivity() //get all activities

    let mondayCounter = 0
    this.week = []
    this.week1 = []
    this.week2 = []

    for (let i = 0; i < this.dayNumber; i++) {
      if (this.dateNow.getDay() == 0) {
        mondayCounter = -6
      } else {
        mondayCounter = - (this.dateNow.getDay() - 1)
      }

      let pom2 = new Date()
      pom2.setDate(this.dateNow.getDate() + mondayCounter)

      let pom = new Date(pom2.toString())
      
      this.week.push(pom)
      pom.setDate(pom.getDate() + i)
    }

    for (let i = 0; i < 7; i++) {
      this.week1.push(this.week[i])
    }

    for (let i = 7; i < this.week.length; i++) {
      this.week2.push(this.week[i])
    }


  }

  getActivity() {
    this.service.getActivityData().subscribe(
      response => this.activities = response
    )
    
  }

  formatThisDateAll(dateToFormat:Date) {
    return formatDate(new Date(dateToFormat), 'dd.MM.yyyy HH:mm', 'en-US')
  }

  formatThisDate(dateToFormat:Date) {
    return formatDate(new Date(dateToFormat), 'dd.MM.yyyy', 'en-US')
  }

  formatThisDateHour(dateToFormat:Date) {
    return formatDate(new Date(dateToFormat), 'HH:mm', 'en-US')
  }

  formatThisDateYear(date:Date) {
    return formatDate(new Date(date), 'YYYY', 'en-US')
  }

  formatThisDateDay(date:Date) {
    return formatDate(new Date(date), 'd', 'en-US')
  }

  getDayName(date:Date) {
    let daysENG = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let daysPL = ['Niedziela', 'Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota'];
    return daysPL[new Date(date).getDay()]
  }

  getMonthName(date:Date) {
    let days = ['Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec', 'Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad', 'Grudzień'];
    return days[new Date(date).getMonth()]
  }

  isDayWeekend(date:Date) : boolean {
    if (new Date(date).getDay() == 0 || new Date(date).getDay() == 6) {
      return true;
    } else {
      return false;
    }
  }

  openActivity(content: any, activityFromModal: Activity) {
    this.service.getActivityDataById(activityFromModal.id).subscribe(
      response => {
        this.activity = response
      }
    )
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeModalResult = `Closed with: ${result}`;
      this.takePartBoolean = false
    }, (reason) => {
      this.closeModalResult = `Dismissed ${this.getDismissReason(reason)}`;
      this.takePartBoolean = false
    });
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

  onSubmitAdd(f: NgForm) {
    let dateForm: Date = new Date(f.controls['date'].value)
    dateForm.setHours(f.controls['time'].value.hour, f.controls['time'].value.minute)
    f.controls['date'].setValue(dateForm)
    this.service.saveActivity(f).subscribe(
      response => {
        this.ngOnInit() //reload page
      }
    )
    this.modalService.dismissAll();
  }

  onSubmitAddUser(f: NgForm, activityFromUserAddModal: Activity) {
    activityFromUserAddModal.participants.push(f.value)

    this.service.updateActivity(activityFromUserAddModal).subscribe(
      (response: any) => {
        this.ngOnInit() //reload page
      }
    )
    
    this.modalService.dismissAll();
  }

  takePart() {
    this.takePartBoolean = true
  }
}
