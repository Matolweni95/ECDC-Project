import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { ApiService } from 'src/app/api.service';

interface Class {
  value: string;
  viewValue: string;
}

interface Venue {
  value: string;
  viewValue: string;
} 
@Component({
  selector: 'app-manager-assign',
  templateUrl: './manager-assign.component.html',
  styleUrls: ['./manager-assign.component.css']
})
export class ManagerAssignComponent implements OnInit {

  name: any;
  tname:any[] = [];
  teacherID = localStorage.getItem("token4")
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


  FormGroup!:FormGroup
  constructor(private http: HttpClient, private _formBuilder: FormBuilder, private dataService: ApiService) {
    this.FormGroup = this._formBuilder.group({
      tid: [this.teacherID, Validators.required],
      desc: ['', Validators.required],
    });
   }
  ngOnInit(): void {

    this.name = localStorage.getItem('token4')
    this.getTeacherName(this.name);
  }

   
  postdata( _selectedClass: any, FormGroup: { value:{ tid:any }})
  {

  this.dataService.insertAssign(this.selectedClass, FormGroup.value.tid, )
  .pipe(first())
  .subscribe(
  data => {
  
  },
  
  error => {
  });
  }


  
  getTeacherName(id: number){
    this.dataService.getTeacherName(id).subscribe(
      response => {
        console.log(response);
        this.tname = response;
        return;
        // this.children = response.items;
      }
    )
  }

  

  submit(){
    const data = {
      id: this.FormGroup.get('tid')?.value,
      venue: this.selectedClass,
      class: this.selectedVenue,
      desc: this.FormGroup.get('desc')?.value

    }

    console.log(data);
  }

}
