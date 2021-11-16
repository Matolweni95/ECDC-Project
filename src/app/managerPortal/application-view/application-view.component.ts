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
  constructor(private fb: FormBuilder,private dataService: ApiService,private router:Router, private http: HttpClient) {

    this.FormGroup = this.fb.group({
      amount: ['', [Validators.required]],
      centres: ['', [Validators.required]],
      liaison: ['', [Validators.required]],
      tets: ['', [Validators.required]],

      
      });

   }

  ngOnInit(): void {
  }

}
