import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class Notification {
  constructor (public id: number, 
              public title: string,
              public message: string){
            }}

@Component({
  selector: 'app-regional-manager-home',
  templateUrl: './regional-manager-home.component.html',
  styleUrls: ['./regional-manager-home.component.css']
})
export class RegionalManagerHomeComponent implements OnInit {

  notifications:any[] = [];
  centres:any[] = [];


constructor(private http: HttpClient) { }

ngOnInit(): void {
  this.getNotifs();
  this.getCentres();
}

getNotifs(){
  this.http.get<any>('http://localhost:8080/FinalProj/php/fetchNotifs.php').subscribe(
    response => {
      console.log(response);
      this.notifications = response;
    }
  )
}

getCentres(){
  this.http.get<any>('http://localhost:8080/FinalProj/php/Regional/countCentres.php').subscribe(
    response => {
      console.log(response);
      this.centres = response;
    }
  )
}
}
