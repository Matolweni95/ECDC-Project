import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { ApiService } from 'src/app/api.service';
@Component({
  selector: 'app-teacher-template',
  templateUrl: './teacher-template.component.html',
  styleUrls: ['./teacher-template.component.css']
})
export class TeacherTemplateComponent implements OnInit {

  TeacherProfile: any;
  teacher:any[] = [];
  FormGroup!: FormGroup;
  constructor(private http: HttpClient, private _formBuilder: FormBuilder, private dataService: ApiService) {
    this.FormGroup = this._formBuilder.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      cellno: ['', Validators.required],
      emailAddress: ['', Validators.required],
      line1: ['', Validators.required],
      line2: ['', Validators.required],
      city: ['', Validators.required],
      zip: ['', Validators.required],

      

    });
   }

  ngOnInit(): void {
  this.TeacherProfile = localStorage.getItem('token4');
  this.getProfile(this.TeacherProfile);
  }

  getProfile(id: number){
    this.dataService.getTeacherProfile(id).subscribe(
      response => {
        console.log(response);
        this.teacher = response;
        return;
        // this.children = response.items;
      }
    )
  }

}
