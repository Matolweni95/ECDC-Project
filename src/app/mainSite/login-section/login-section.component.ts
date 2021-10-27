import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TestBed } from '@angular/core/testing';

@Component({
  selector: 'app-login-section',
  templateUrl: './login-section.component.html',
  styleUrls: ['./login-section.component.css']
})
export class LoginSectionComponent implements OnInit {

 
  angForm: FormGroup;
  constructor(private fb: FormBuilder,private dataService: ApiService,private router:Router) {
  this.angForm = this.fb.group({
  email: ['', [Validators.required,Validators.minLength(1), Validators.email]],
  password: ['', Validators.required]
  });
  }
    
    ngOnInit() {
     
    }
    
    
    postdata(angForm1: { value: { email: any; password: any; }; })
    {
    this.dataService.userlogin(angForm1.value.email,angForm1.value.password)
    .pipe(first())
    .subscribe(
    data => {
    
      if(localStorage.getItem('token1') == 'Admin'){
        const redirect = this.dataService.redirectUrl ? this.dataService.redirectUrl : 'Admin-Portal/Dashboard';
        this.router.navigate([redirect]);
      }
    
      if(localStorage.getItem('token1') == 'Parent'){
        const redirect = this.dataService.redirectUrl ? this.dataService.redirectUrl : 'Parent-Portal/Parent-home';
        this.router.navigate([redirect]);
      }
      
      else if (localStorage.getItem('token1') == 'Teacher'){
        const redirect = this.dataService.redirectUrl ? this.dataService.redirectUrl : 'Teacher-Portal/Teacher-home';
        this.router.navigate([redirect]);
      }
    
      else if (localStorage.getItem('token1') == 'Manager'){
        const redirect = this.dataService.redirectUrl ? this.dataService.redirectUrl : 'Manager-Portal/Manager-Home';
        this.router.navigate([redirect]);
      }
    
      else if (localStorage.getItem('token1') == 'Regional Coordinator'){
        const redirect = this.dataService.redirectUrl ? this.dataService.redirectUrl : 'Regional-Portal/Regional-Home';
        this.router.navigate([redirect]);
      }
    
      else if (localStorage.getItem('token1') == 'Provincial Liaison'){
        const redirect = this.dataService.redirectUrl ? this.dataService.redirectUrl : 'Liaison-Portal/Liaison-Home';
        this.router.navigate([redirect]);
      }
    },
    error => {
    alert("User name or password is incorrect")
    });
    }
    get email() { return this.angForm.get('email'); }
    get password() { return this.angForm.get('password'); }
    }
    
    
    
    /*
      loginbtn:boolean;
      logoutbtn:boolean;
      
      constructor(private dataService: ApiService) {
      dataService.getLoggedInName.subscribe(name => this.changeName(name));
      if(this.dataService.isLoggedIn())
      {
      console.log("loggedin");
      this.loginbtn=false;
      this.logoutbtn=true
      }
      else{
      this.loginbtn=true;
      this.logoutbtn=false
      }
      
      }
      
      private changeName(name: boolean): void {
      this.logoutbtn = name;
      this.loginbtn = !name;
      }
      logout()
      {
      this.dataService.deleteToken();
      window.location.href = window.location.href;
      }
    }
    
    */