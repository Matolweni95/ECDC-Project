import { Component, OnInit } from '@angular/core';
import { Term1Component } from 'src/app/parentPortal/progress/term1/term1.component';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
@Component({
  selector: 'app-manager-view-progress',
  templateUrl: './manager-view-progress.component.html',
  styleUrls: ['./manager-view-progress.component.css']
})
export class ManagerViewProgressComponent implements OnInit {

  id:any;
  term: any;
  child: any;
  childprogress:any [] = [];
  btns:any[] = [
    { value: 'term1' , value2: 'Term 1'},
    { value: 'term2' , value2: 'Term 2'},
    { value: 'term3' , value2: 'Term 3'},
    { value: 'term4' , value2: 'Term 4'},
  
   
  ];

  constructor(private router:Router,private dataService: ApiService) { }

  ngOnInit(): void {
    this.child = localStorage.getItem('token6');
    this.term = localStorage.getItem('token8');
    
  }
  
submit(term:any){
  localStorage.setItem('token8', term)
  this.getChild(this.child, this.term);
  this.router.navigateByUrl('/Manager-Portal/View-Progress/Progress');
  
 
}

getChild(child: any, term:string){
  
  this.dataService.getChildProgress(child, term).subscribe(
    response => {
      console.log(response);
      this.childprogress = response;
      window.location.reload();
      return;
      
      // this.children = response.items;
    }
  )
}


}
