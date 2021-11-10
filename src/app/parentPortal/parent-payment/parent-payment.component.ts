import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-payment',
  templateUrl: './parent-payment.component.html',
  styleUrls: ['./parent-payment.component.css']
})
export class ParentPaymentComponent implements OnInit {
  parentPayment!: string;
  payment: string[] = ['credit card', 'debit card', 'paypal'];

  constructor() { }

  ngOnInit(): void {
  }

}


