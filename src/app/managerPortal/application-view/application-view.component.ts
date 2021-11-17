import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-application-view',
  templateUrl: './application-view.component.html',
  styleUrls: ['./application-view.component.css']
})
export class ApplicationViewComponent implements OnInit {

  FormGroup!: FormGroup;
  test1:any;
  test2:any;
  test3: any;
  id:any;
  appId = localStorage.getItem('temp');
  childSet: any[] = [];
  parentvalue: any[] =[];
  test:any;
  user:any[] = [];
  value:any [] = [];
  notifications: any[] = [];
  application: any;
  constructor(private fb: FormBuilder,private dataService: ApiService,private router:Router, private http: HttpClient) {

    this.FormGroup = this.fb.group({
      amount: ['', [Validators.required]],
      centres: ['', [Validators.required]],
      liaison: ['', [Validators.required]],
      tets: ['', [Validators.required]],

      
      });

   }


  ngOnInit(): void {
    this.test = localStorage.getItem('token10');
    this.getChild(this.test);
  }

  // getNotifs(){
  //   this.http.get<any>('http://localhost:8080/FinalProj/php/Manager/fetchApplication.php').subscribe(
  //     response => {
  //       console.log(response);
  //       this.notifications = response;
  //     }
  //   )
  // }

  
  getChild(id: number){
    this.dataService.getApplication(id).subscribe(
      response => {
        console.log(response);
        this.notifications = response;
        return;
        // this.children = response.items;
      }
    )
  }

  onSubmit(test: any){
    this.dataService.setStatus(test).subscribe(
      response => {
        console.log(response);
        this.value = response;
        return;
        // this.children = response.items;
      }
    )

    this.dataService.setChild(test).subscribe(
      response => {
        this.childSet = response;
        return;
        // this.children = response.items;
      }
    )
 

    this.dataService.updateChildParent(test).subscribe(
      response => {
          console.log(response);
          this.parentvalue = response;
          return;
      
        // this.children = response.items;
      }
    )

    this.dataService.setUser(test).subscribe(
      response => {
          console.log(response);
          this.user = response;
          return;
      
        // this.children = response.items;
      }
    )


  }


}
