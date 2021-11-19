import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ApiService } from 'src/app/api.service';
@Component({
  selector: 'app-manager-term2',
  templateUrl: './manager-term2.component.html',
  styleUrls: ['./manager-term2.component.css']
})
export class ManagerTerm2Component implements OnInit {

  term: any;
  child: any;
  childprogress:any [] = [];
  constructor( private dataService: ApiService,private router:Router) { }

  ngOnInit(): void {
    this.child = localStorage.getItem('token6');
    this.term = localStorage.getItem('token8');
    this.getChild(this.child, this.term)
   
   
  }

  getChild(child: any, term:string){
    
    this.dataService.getChildProgress(child, term).subscribe(
      response => {
        console.log(response);
        this.childprogress = response;
        return;
        // this.children = response.items;
      }
    )
  }

}
