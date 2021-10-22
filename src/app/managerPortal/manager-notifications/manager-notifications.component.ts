import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class Notification {
  constructor (public id: number, 
              public title: string,
              public message: string){
              }}
@Component({
  selector: 'app-manager-notifications',
  templateUrl: './manager-notifications.component.html',
  styleUrls: ['./manager-notifications.component.css']
})
export class ManagerNotificationsComponent implements OnInit {

  notifications:any[] = [];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getNotifs();
  }

  getNotifs(){
    this.http.get<any>('http://localhost/FinalProj/php/fetchNotifs.php').subscribe(
      response => {
        console.log(response);
        this.notifications = response;
      }
    )
  }
}

