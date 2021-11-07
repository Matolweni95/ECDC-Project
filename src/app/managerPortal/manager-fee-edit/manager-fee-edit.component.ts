import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

interface Class {
  value: string;
  viewValue: string;
}

interface Venue {
  value: string;
  viewValue: string;
} 
@Component({
  selector: 'app-manager-fee-edit',
  templateUrl: './manager-fee-edit.component.html',
  styleUrls: ['./manager-fee-edit.component.css']
})
export class ManagerFeeEditComponent implements OnInit {

  FormGroup!: FormGroup;
  selectedClass!: string;
  selectedVenue!: string;
  

  class: Class[] = [
    {value: 'GR-0', viewValue: 'Grade r'},
    {value: 'GR-1', viewValue: 'Pre-grade r'},
    {value: 'GR-2', viewValue: 'Preparatory'},
    {value: 'GR-3', viewValue: 'Play school'},
    {value: 'GR-4', viewValue: 'Day care'},

  ];

  venue: Venue[] = [
    {value: 'Class1', viewValue: 'class 1'},
    {value: 'Class2', viewValue: 'class 2'},
    {value: 'Class3', viewValue: 'class 3'},
    {value: 'Class4', viewValue: 'class 4'},
    {value: 'Class5', viewValue: 'class 5'},
  ];


  constructor(private http: HttpClient, private fb: FormBuilder,) {
    this.FormGroup = this.fb.group({
      grade: ['', [Validators.required,Validators.minLength(1), Validators.email]],
      fees: ['', Validators.required],
      year: ['', Validators.required],
      
      });
   }

  ngOnInit(): void {
    
    
  }

 
}
