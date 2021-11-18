import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-mychild-profile',
  templateUrl: './mychild-profile.component.html',
  styleUrls: ['./mychild-profile.component.css']
})
export class MychildProfileComponent implements OnInit {

  child: any[] = [];

  FormGroup!: FormGroup;
  constructor(private http: HttpClient, private _formBuilder: FormBuilder, private dataService: ApiService,private router:Router) {
  
    
    this.FormGroup = this._formBuilder.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      parentName: ['', Validators.required],
      parentSurname: ['', Validators.required],
      className: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      
    
    });
  }
  ngOnInit(): void {
    this.getchildprofile();
  }
  postdata(FormGroup: { value: { name: any, surname: any, parentName: any, parentSurname: any,className: any, dateOfBirth: any}})
{
this.dataService.childprofile(FormGroup.value.name, FormGroup.value.surname, 
  FormGroup.value.parentName,FormGroup.value.parentSurname,FormGroup.value.className ,FormGroup.value.dateOfBirth)
.pipe(first())
.subscribe(
data => {

},

error => {
});
}

getchildprofile(){
  this.http.get<any>('http://sict-iis.mandela.ac.za/12/assets/php/parent/fetchchild.php').subscribe(
    response => { 
      console.log(response);
      this.child = response;
    }
  )
}

}
