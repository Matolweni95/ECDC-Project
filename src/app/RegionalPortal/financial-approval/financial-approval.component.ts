import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';

export interface PeriodicElement {
  "Centre Name": string;
  "Requested Funds": string;
  "Available Funds": string;
  Äctions: string;
}

let ELEMENT_DATA: PeriodicElement[] = [

];

@Component({
  selector: 'app-financial-approval',
  templateUrl: './financial-approval.component.html',
  styleUrls: ['./financial-approval.component.css']
})
export class FinancialApprovalComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight','status','symbol'];
  dataSource = ELEMENT_DATA;
  results : any[]= []; 
  constructor(
    private router: Router,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.getRequestedFunds();

  }

  getRequestedFunds() {
    this.http.get<any>(`${environment.baseUrl}/fetchRequestedFunds.php`).subscribe(
      response => {
        this.results = response;
      }
    );
  }

  approve(id: number) {
    this.http.get<any>(`${environment.baseUrl}/approveFunds.php?id=${id}`).subscribe(
      response => {
        this.results = response;
      }
    );
  }

  decline(id: number) {
    this.http.get<any>(`${environment.baseUrl}/declineFunds.php?id=${id}`).subscribe(
      response => {
        this.results = response;
      }
    );
  }
}
