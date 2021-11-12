import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { first } from 'rxjs/operators';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-contact-section',
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.css']
})
export class ContactSectionComponent implements OnInit {
  faPaperPlane = faPaperPlane;
  FormGroup: FormGroup;
  constructor(private fb: FormBuilder,private dataService: ApiService,private router:Router, private http: HttpClient) {

    this.FormGroup = this.fb.group({
      name: ['', [Validators.required]],
      cellno: ['', [Validators.required]],
      message: ['', [Validators.required]],
      email: ['', [Validators.required]],
  
      });

   }

   postdata(FormGroup: { value: { name: any, cellno: any,  message: any, email:any, }})
   {
   this.dataService.sendContact(FormGroup.value.name,  FormGroup.value.cellno, FormGroup.value.message, FormGroup.value.email)
   .pipe(first())
   .subscribe(
   data => {
   
   },
   
   error => {
   });
   }


  ngOnInit(): void {
  }

}
