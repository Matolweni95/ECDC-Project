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
export class Notification {
  constructor (public id: number, 
              public title: string,
              public message: string){
  
  }
}
@Component({
  selector: 'app-manager-centre-fees',
  templateUrl: './manager-centre-fees.component.html',
  styleUrls: ['./manager-centre-fees.component.css']
})
export class ManagerCentreFeesComponent implements OnInit {
  date =  new Date().getFullYear();
 
  serializedDate = new FormControl((new Date()).toISOString());
  
  notifications:any[] = [];
  
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


  constructor(private http: HttpClient, private fb: FormBuilder,private dataService: ApiService) {
    this.FormGroup = this.fb.group({
      grade: ['', [Validators.required,Validators.minLength(1), Validators.email]],
      fees: ['', Validators.required],
      desc: ['', Validators.required],
      year: [this.date, Validators.required],
      
      });
   }

  ngOnInit(): void {
    
    
  }

  postdata(FormGroup: { value:{ desc:any, fees:any, year:any }}, _selectedClass: any, _selectedVenue: any)
  {

  this.dataService.insertFees(FormGroup.value.desc, FormGroup.value.fees, FormGroup.value.year, this.selectedClass, this.selectedVenue )
  .pipe(first())
  .subscribe(
  _data => {
  
  },
  
  _error => {
  });
  }


  getNotifs(){
    this.http.get<any>('http://localhost:8080/FinalProj/pmkhp/fetchNotifs.php').subscribe(
      response => {
        console.log(response);
        this.notifications = response;
      }
    )
  }
}

