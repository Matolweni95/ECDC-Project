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


  constructor(private http: HttpClient ,private dataService: ApiService) { }

  ngOnInit(): void {
    this.parentId = localStorage.getItem('token3');
    this.getNotifs(this.parentId);
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
}
