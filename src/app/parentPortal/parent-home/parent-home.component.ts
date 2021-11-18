import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from 'src/app/api.service';

export class Notification {
  constructor (public id: number, 
              public title: string,
              public message: string){
  
  }
}
@Component({
  selector: 'app-parent-home',
  templateUrl: './parent-home.component.html',
  styleUrls: ['./parent-home.component.css']
})
export class ParentHomeComponent implements OnInit {

  parentId: any;
  notifications:any[] = [];
  fees: any[]=[];
  additionalFees: any[]=[];
  totalDue: any[]=[];
  notifs:any[]=[];
  childPrograms :any[]=[];
  childClass:any[] = [];



  constructor(private http: HttpClient ,private dataService: ApiService) { }

  ngOnInit(): void {
    this.parentId = localStorage.getItem('token3');
    this.getNotifs(this.parentId);
    this.getFees();
    this.getAddiionalFees();
    this.getTotalDue();
    this.getNotifications();
    this.getChildPrograms();
    this.getChildClass();
    
  }

  getNotifs(id: number){
    this.dataService.getLearners(id).subscribe(
      response => {
        console.log(response);
        return;
        // this.children = response.items;
      }
    )
  }

  getFees(){
    this.http.get<any>('http://sict-iis.mandela.ac.za/12/assets/php/parent/fetchfees.php').subscribe(
      response => {
        console.log(response);
        this.fees = response;
      }
    )
  }
  getAddiionalFees(){
    this.http.get<any>('http://sict-iis.mandela.ac.za/12/assets/php/parent/fetchAddFees.php').subscribe(
      response => {
        console.log(response);
        this.additionalFees = response;
      }
    )
  }

  getTotalDue(){
    this.http.get<any>('http://sict-iis.mandela.ac.za/12/assets/php/parent/getTotalfees.php').subscribe(
      response => {
        console.log(response);
        this.totalDue = response;
      }
    )
  }

  getNotifications(){
    this.http.get<any>('http://sict-iis.mandela.ac.za/12/assets/php/parent/fetchParentNotifs.php').subscribe(
      response => {
        console.log(response);
        this.notifs = response;
      }
    )
  }
  
  getChildPrograms(){
    this.http.get<any>('http://sict-iis.mandela.ac.za/12/assets/php/parent/fetchPrograms.php').subscribe(
      response => {
        console.log(response);
        this.childPrograms = response;
      }
    )
  }
  getChildClass(){
    this.http.get<any>('http://sict-iis.mandela.ac.za/12/assets/php/parent/fetchChildClass.php').subscribe(
      response => {
        console.log(response);
        this.childClass = response;
      }
    )
  }
 
}
