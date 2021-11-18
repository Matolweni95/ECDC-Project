import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-parent-child-progress',
  templateUrl: './parent-child-progress.component.html',
  styleUrls: ['./parent-child-progress.component.css']
})
export class ParentChildProgressComponent implements OnInit {

  id: any;
  test: any;
  test2: any;
  term: any;
  childId: any;
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
    this.term = localStorage.getItem('token8')
    this.id = localStorage.getItem('token3');
    this.getChildId(this.id);
    
    
  }
  
submit(term:any){
  localStorage.setItem('token8', term);
  this.getChild(this.child,this.term);
  // this.getChild(this.child, this.term);
  
  this.router.navigateByUrl('/Parent-Portal/Mychild-Progress/Report');
  
}

getChild(child: any, term:string){
  this.dataService.getParentChildProgress(child, term).subscribe(
    response => {
      console.log(response);
      this.childprogress = response; 
      window.location.reload();
      return;
      // this.children = response.items;
    }
  )
} 

getChildId(id:any){
  this.dataService.fetchChildId(id).subscribe(
    response => {
      console.log(response);
      this.childprogress = response; 
      this.childId = response;
      this.test = this.childId[0];
      this.test2 = this.test['childID']
      this.test2 = localStorage.setItem('token6', this.test2)
      return;
      // this.children = response.items;
    }
  )
} 




  

}
