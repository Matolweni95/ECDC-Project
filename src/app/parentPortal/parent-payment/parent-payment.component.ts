import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-parent-payment',
  templateUrl: './parent-payment.component.html',
  styleUrls: ['./parent-payment.component.css']
})
export class ParentPaymentComponent implements OnInit {
  FormGroup!: FormGroup;
  parentPayment!: string;
  payment: string[] = ['credit card', 'debit card', 'paypal'];
  
  constructor(private http: HttpClient, private fb: FormBuilder, private dataService: ApiService) {
    this.FormGroup = this.fb.group({
      firstName: ['', [Validators.required,Validators.minLength(1), Validators.email]],
      lastName: ['', Validators.required],
      nameOnCard: ['', Validators.required],
      cardNumber: ['', Validators.required],
      expiryDate: ['', Validators.required],
      cvv: ['', Validators.required],
      test: ['', Validators.required],


      
      
      });
   }
  ngOnInit(): void {
  }
  postdata(FormGroup: { value:{ firstName:any, lastName:any, nameOnCard:any, test:any, expiryDate:any, cvv:any}}, _parentPayment: any )
  {

  this.dataService.payment(FormGroup.value.firstName, FormGroup.value.lastName, FormGroup.value.nameOnCard, FormGroup.value.test, FormGroup.value.nameOnCard, FormGroup.value.nameOnCard ,this.parentPayment )
  .pipe(first())
  .subscribe(
  _data => {
  
  },
  
  _error => {
  });
  }

}


