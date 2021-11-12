import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-mychildren',
  templateUrl: './mychildren.component.html',
  styleUrls: ['./mychildren.component.css']
})
export class MychildrenComponent implements OnInit {
 
  childprogress:[]=[];
  constructor(private router:Router,private dataService: ApiService) { }

  ngOnInit(): void {
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
