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

  FormGroup!: FormGroup;
  centre:[] = [];
  liaison:[] = [];

  constructor(private fb: FormBuilder,private dataService: ApiService,private router:Router, private http: HttpClient) {

    this.FormGroup = this.fb.group({
      amount: ['', [Validators.required]],
      centres: ['1', [Validators.required]],
      liaison: ['', [Validators.required]],
      tets: ['', [Validators.required]],

      
      });

   }

   getCentre(){
    this.http.get<any>('http://sict-iis.mandela.ac.za/12/assets/php/Manager/fetchCentre.php').subscribe(
      response => {
        console.log(response);
        this.centre = response;
      }
    )
  }

  getLiaison(){
    this.http.get<any>('http://sict-iis.mandela.ac.za/12/assets/php/Manager/fetchLiaison.php').subscribe(
      response => {
        console.log(response);
        this.liaison = response;
      }
    )
  }

  submit(){
    const data = {
      name: this.liaison,
      surname: this.centre,
      amount: this.FormGroup.get('amount')?.value
    }
    console.log(data)
  }

  ngOnInit(): void {
    this.getCentre();
    this.getLiaison();
  }

  postdata(Forms: { value: { centres: any, amount: any}})
  {
  this.dataService.getFunding(Forms.value.centres, Forms.value.amount)
  .pipe(first())
  .subscribe(
  data => {
  
  },
  
  error => {
  });
  }
}