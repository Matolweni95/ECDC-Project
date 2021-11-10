import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/api.service';

interface Value {
  value: string;
  viewValue: string;
}
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

  FormGroup!: FormGroup;
  selectedValue!: string;
  notifications:any[] = [];

  value: Value[] = [
    {value: 'dest1', viewValue: 'Teacher'},
    {value: 'dest2', viewValue: 'Parent'},
  
  ];

  constructor(private http: HttpClient, private fb: FormBuilder, private dataService: ApiService) {
    this.FormGroup = this.fb.group({
      grade: ['', [Validators.required,Validators.minLength(1), Validators.email]],
      desc: ['', Validators.required],
      fees: ['', Validators.required],

      });
   }


  ngOnInit(): void {
    this.getNotifs();
  }

  getNotifs(){
    this.http.get<any>('http://localhost:8080/FinalProj/php/Manager/fetchManagerNotifs.php').subscribe(
      response => {
        console.log(response);
        this.notifications = response;
      }
    )
  }

  getTry(notificationId: any){
    localStorage.setItem('token7', notificationId)
  }
}

