import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-parent-profile',
  templateUrl: './parent-profile.component.html',
  styleUrls: ['./parent-profile.component.css']
})
export class ParentProfileComponent implements OnInit {

  parent: any[] = [];

  FormGroup!: FormGroup;
  constructor(private _formBuilder: FormBuilder, private dataService: ApiService,private router:Router) {
  
    
    this.FormGroup = this._formBuilder.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      cellno: ['', Validators.required],
      emeil: ['', Validators.required],
      line1: ['', Validators.required],
      line2: ['', Validators.required],
      city: ['', Validators.required],
      zip: ['', Validators.required],
    
    });
  }
  ngOnInit(): void {
  }
  postdata(FormGroup: { value: { name: any, surname: any, cellno: any, email: any, line1: any,line2: any, city: any, zip: any}})
{
this.dataService.parentProfile(FormGroup.value.name, FormGroup.value.surname, 
  FormGroup.value.cellno,FormGroup.value.email, FormGroup.value.line1, FormGroup.value.line2, FormGroup.value.city,FormGroup.value.zip)
.pipe(first())
.subscribe(
data => {

},

error => {
});
}

}
