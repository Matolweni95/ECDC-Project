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


  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getNotifs();
  }

  getNotifs(){
    this.http.get<any>('http://localhost/angularproj/php/fetchNotifs.php').subscribe(
      response => {
        console.log(response);
        this.notifications = response;
      }
    )
  }
}
