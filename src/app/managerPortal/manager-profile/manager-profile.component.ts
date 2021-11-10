import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from 'src/app/api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

export class Manager {
  constructor (public firstName: number, 
              public surame: string,
              public emailAddress: string,
              public line1Adress: string,
              public line2Address: string,
              public City: string,
              public zip: string){
  
  }
}
@Component({
  selector: 'app-manager-profile',
  templateUrl: './manager-profile.component.html',
  styleUrls: ['./manager-profile.component.css']
})


export class ManagerProfileComponent implements OnInit {

  manager:any[] = [];

  FormGroup!: FormGroup;
  constructor(private http: HttpClient, private _formBuilder: FormBuilder, private dataService: ApiService) {
    this.FormGroup = this._formBuilder.group({
      name: ['', Validators.required],
      Surname: ['', Validators.required],
      email: ['', Validators.required],
      cellno: ['', Validators.required],
      city: ['', Validators.required],
      line1: ['', Validators.required],
      line2: ['', Validators.required],
      zip: ['', Validators.required],

      

    });
   }

  ngOnInit(): void {
    this.getManager();
  }
  
  postdata(FormGroup: { value: { name: any, surname: any, cellno: any, email:any, line1:any, line2:any, city:any,zip:any }})
  {
  this.dataService.profileUpdate(FormGroup.value.name, FormGroup.value.surname, FormGroup.value.cellno, FormGroup.value.email, FormGroup.value.line1, FormGroup.value.line2, FormGroup.value.city, FormGroup.value.zip)
  .pipe(first())
  .subscribe(
  data => {
  
  },
  
  error => {
  });
  }

  submit(){
    const data = {
      name: this.FormGroup.get('name')?.value
    }
    console.log(data);
  }

  getManager(){
    this.http.get<any>('http://localhost:8080/FinalProj/php/Manager/fetchManager.php').subscribe(
      response => { 
        console.log(response);
        this.manager = response;
      }
    )
  }

}
