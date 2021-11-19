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
  if(localStorage.getItem('token8') == 'term1'){
    this.router.navigateByUrl('/Parent-Portal/Mychild-Progress/term1');
  }else if(localStorage.getItem('token8') == 'term2'){
    this.router.navigateByUrl('/Parent-Portal/Mychild-Progress/term2')
  }else if(localStorage.getItem('token8') == 'term3'){
    this.router.navigateByUrl('/Parent-Portal/Mychild-Progress/term3')
  }else if(localStorage.getItem('token8') == 'term4'){
    this.router.navigateByUrl('/Parent-Portal/Mychild-Progress/term4')
  }
  
}

getChild(child: any, term:string){
  this.dataService.getParentChildProgress(child, term).subscribe(
    response => {
      console.log(response);
      this.childprogress = response; 
      this.ngOnInit();
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
