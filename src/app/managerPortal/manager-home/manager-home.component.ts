import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class Notification {
  constructor (public id: number, 
              public title: string,
              public message: string,
              public grade: string){
            }}

  
@Component({
  selector: 'app-manager-home',
  templateUrl: './manager-home.component.html',
  styleUrls: ['./manager-home.component.css']
})
export class ManagerHomeComponent implements OnInit {

  notifications:any[] = [];
  Learners:[] = [];
  Teacher:[] = [];
  Funds:[] = [];
  

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getNotifs();
    this.getLearners();
    this.getTeacher();
    this.getFunds();
  }

  getNotifs(){
    this.http.get<any>('http://localhost:8080/FinalProj/php/fetchNotifs.php').subscribe(
      response => {
        this.notifications = response;
      }
    )
  }

  getLearners(){
    this.http.get<any>('http://localhost:8080/FinalProj/php/Manager/countLearners.php').subscribe(
      response => { 
        this.Learners = response;
      }
    )
  }

  getTeacher(){
    this.http.get<any>('http://localhost:8080/FinalProj/php/Manager/countTeachers.php').subscribe(
      response => {
        this.Teacher = response;
      }
    )
  }

  getFunds(){
    this.http.get<any>('http://localhost:8080/FinalProj/php/Manager/getFunds.php').subscribe(
      response => {
        console.log(response)
        this.Funds = response;
      }
    )
  }
}
