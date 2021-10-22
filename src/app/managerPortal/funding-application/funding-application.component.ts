import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { HttpClient } from '@angular/common/http';

export class Notification {
  constructor (public id: number, 
              public title: string,
              public message: string){
            }}
@Component({
  selector: 'app-funding-application',
  templateUrl: './funding-application.component.html',
  styleUrls: ['./funding-application.component.css']
})
export class FundingApplicationComponent implements OnInit {

  angForm!: FormGroup;
  notifications:any[] = [];

  constructor(private fb: FormBuilder,private dataService: ApiService,private router:Router, private http: HttpClient) {

    this.angForm = this.fb.group({
      email: ['', [Validators.required,Validators.minLength(1), Validators.email]],
      password: ['', Validators.required]
      });

   }

   getNotifs(){
    this.http.get<any>('http://localhost/angularproj/php/fetchNotifs.php').subscribe(
      response => {
        console.log(response);
        this.notifications = response;
      }
    )
  }

  ngOnInit(): void {
    this.getNotifs();
  }
  postdata(angForm1: { value: { email: any; password: any; }; })
  {
    this.dataService.userlogin(angForm1.value.email,angForm1.value.password)
    .pipe(first())
    .subscribe(
    data => {
    const redirect = this.dataService.redirectUrl ? this.dataService.redirectUrl : '/dashboard';
    this.router.navigate([redirect]);
    },
    error => {
    alert("User name or password is incorrect")
    });
    }
    get email() { return this.angForm.get('email'); }
    get password() { return this.angForm.get('password'); }
    }