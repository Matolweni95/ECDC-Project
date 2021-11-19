import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
export class Notification {
  constructor (public id: number, 
              public title: string,
              public message: string){
            }}
  

@Component({
  selector: 'app-syllabus',
  templateUrl: './syllabus.component.html',
  styleUrls: ['./syllabus.component.css']
})
export class SyllabusComponent implements OnInit {
  centers: any[] = [];
  angForm!: FormGroup;
  notifications:any[] = [];

  constructor(private fb: FormBuilder,private dataService: ApiService,private router:Router, private http: HttpClient) {

    this.angForm = this.fb.group({
      email: ['', [Validators.required,Validators.minLength(1), Validators.email]],
      password: ['', Validators.required]
      });

   }
   ngOnInit(): void {
    this.getCentres();
    this.getNotifs();
  }

   getNotifs(){
    this.http.get<any>('http://localhost/angularproj/php/fetchNotifs.php').subscribe(
      response => {
        console.log(response);
        this.notifications = response;
      }
    )
  }

  getCentres() {
    this.http.get<any>('http://sict-iis.mandela.ac.za/12/assets/php/fetchCenters.php').subscribe(
      response => {
        this.centers = response;
      }
    );
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