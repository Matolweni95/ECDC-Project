import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-parent-child-progress',
  templateUrl: './parent-child-progress.component.html',
  styleUrls: ['./parent-child-progress.component.css']
})
export class ParentChildProgressComponent implements OnInit {

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
    this.term = localStorage.getItem('token8')
    
  }
  
submit(term:any){
  localStorage.setItem('token8', term)
  this.getChild(this.child,this.term);
  // this.getChild(this.child, this.term);
  this.router.navigateByUrl('/parentPortal/parent-child-progress/parent-child-progress');
 
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


  

}
