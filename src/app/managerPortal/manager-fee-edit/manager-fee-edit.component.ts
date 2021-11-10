import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/api.service';
import { first } from 'rxjs/operators';

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
  fee:any;
  fees:any[] = [];
  currentYear = new Date().getFullYear();
  id = localStorage.getItem('token5');
  

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


  constructor(private http: HttpClient, private fb: FormBuilder, private dataService: ApiService) {
    this.FormGroup = this.fb.group({
      grade: ['', [Validators.required,Validators.minLength(1), Validators.email]],
      desc: ['', Validators.required],
      fees: ['', Validators.required],
      id: [this.id, Validators.required],
      
      });
   }

  ngOnInit(): void {
    
    
  }

  postdata(FormGroup: { value:{ fees:any, desc:any, id:any }}, _selectedClass: any, _selectedVenue: any)
  {

  this.dataService.editFees(FormGroup.value.fees, FormGroup.value.desc, FormGroup.value.id, this.selectedClass, this.selectedVenue )
  .pipe(first())
  .subscribe(
  _data => {
  
  },
  
  _error => {
  });
  }

submit(){
  const data = {
    name: this.id,
  }
  console.log(data);
}

 
}
