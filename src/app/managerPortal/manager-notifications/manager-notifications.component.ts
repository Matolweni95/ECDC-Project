import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/api.service';
import { first } from 'rxjs/operators';

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
  notif: any[] = [];
  value: Value[] = [
    {value: 'dest1', viewValue: 'Manager'},
    
  
  ];

  constructor(private http: HttpClient, private fb: FormBuilder, private dataService: ApiService) {
    this.FormGroup = this.fb.group({
      title: ['', [Validators.required,Validators.minLength(1), Validators.email]],
      desc: ['', Validators.required],
      

      });
   }


  ngOnInit(): void {
    this.getNotifs();
    
  }

  postdata(FormGroup: { value: { title: any, desc: any}}, _selectedValue: any)
  {
  this.dataService.addManagerNotif(FormGroup.value.title, FormGroup.value.desc, this.selectedValue)
  .pipe(first())
  .subscribe(
  data => {
  
  },
  
  error => {
  });
  }

  getNotifs(){
    this.http.get<any>('http://localhost:8080/FinalProj/php/Manager/viewNotif.php').subscribe(
      response => {
        console.log(response);
        this.notifications = response;
      }
    )
  }

  getTry(notificationId: any){
    localStorage.setItem('token7', notificationId)
    this.deleteNotif(notificationId);
    window.location.reload();
  }
  
  deleteNotif(id: number){
      this.dataService.deleteNotifs(id).subscribe(
        response => {
          console.log(response);
          this.notif = response;
         
          return;
          // this.children = response.items;
        }
      )
    }
}

