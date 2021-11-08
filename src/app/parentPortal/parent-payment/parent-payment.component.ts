import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-parent-payment',
  templateUrl: './parent-payment.component.html',
  styleUrls: ['./parent-payment.component.css']
})
export class ParentPaymentComponent implements OnInit {

  payment!: string;
  paymentOptions: string[] = [
    'credit card',
    'debit Card',
    'pay pal',
    
  ];

  FormGroup! : FormGroup
  constructor(private http: HttpClient, private _formBuilder: FormBuilder, private dataService: ApiService,private router:Router) { 
     
    this.FormGroup = this._formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      nameOnCard: ['', Validators.required],
      creditCardNumber: ['', Validators.required],
      expiryDate: ['', Validators.required],
      cvv: ['', Validators.required],

    });
  }

  ngOnInit(): void {
    this.getPayment();
  }
  postdata(FormGroup: { value: { firstName: any, lastName: any, nameOnCard: any, creditCardNumber: any, cvv: any}})
  {
  this.dataService.payment(FormGroup.value.firstName, FormGroup.value.lastName, 
    FormGroup.value.nameOnCard,FormGroup.value.creditCardNumber, FormGroup.value.cvv)
  .pipe(first())
  .subscribe(
  data => {
  
  },
  
  error => {
  });
  }
  
  getPayment(){
    this.http.get<any>('http://localhost:8080/FinalProj/php/parent/parentPayment.php').subscribe(
      response => { 
        console.log(response);
        this.payment = response;
      }
    )
  }
  
  }

