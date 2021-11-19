import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
@Component({
  selector: 'app-term3',
  templateUrl: './term3.component.html',
  styleUrls: ['./term3.component.css']
})
export class Term3Component implements OnInit {

  childprogress: [] = [];
  id: any;
  child:any;
  term: any;
  constructor(private router:Router,private dataService: ApiService) { }

  ngOnInit(): void {
    this.child = localStorage.getItem('token6');
    this.term = localStorage.getItem('token8')
    this.id = localStorage.getItem('token3');

    this.getChild(this.child, this.term);
  }

  getChild(child: any, term:string){
    this.dataService.getParentChildProgress(child, term).subscribe(
      response => {
        console.log(response);
        this.childprogress = response;
        return;
  
        // this.children = response.items;
      }
    )
  } 
}
