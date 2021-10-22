import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class Notification {
  constructor (public id: number, 
              public title: string,
              public message: string){
  
  }
}
@Component({
  selector: 'app-teacher-home',
  templateUrl: './teacher-home.component.html',
  styleUrls: ['./teacher-home.component.css']
})
export class TeacherHomeComponent implements OnInit {

  notifications:any[] = [];


  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getNotifs();
  }

  getNotifs(){
    this.http.get<any>('http://localhost/angular-admin/php/fetchNotifs.php').subscribe(
      response => {
        console.log(response);
        this.notifications = response;
      }
    )
  }
}
