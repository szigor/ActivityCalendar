import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';



export class Activity {
  constructor(
    public id:number,
    public name:string,
    public place:string,
    public date:Date,
    public participants:Array<Participant>
  ){}
}

export class Participant {
  constructor(
    public id:number,
    public userName:string,
    public email:string
  ){}
}

@Injectable({
  providedIn: 'root'
})
export class ActivityDataService {

  constructor(
    private http: HttpClient
  ) { }

  getActivityData() {
    return this.http.get<Array<Activity>>('http://localhost:8080/activities')
  }

  getActivityDataById(id: number) {
    return this.http.get<Activity>(`http://localhost:8080/activity/${id}`)
  }

  saveActivity(form: NgForm) {
    return this.http.post('http://localhost:8080/activity/save', form.value)
  }

  updateActivity(activity: Activity) {
    return this.http.put('http://localhost:8080/activity/update', activity)
  }
}
