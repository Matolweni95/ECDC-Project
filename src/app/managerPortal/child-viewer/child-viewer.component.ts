import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { ApiService } from 'src/app/api.service';
@Component({
  selector: 'app-child-viewer',
  templateUrl: './child-viewer.component.html',
  styleUrls: ['./child-viewer.component.css']
})
export class ChildViewerComponent implements OnInit {

  child: any;
  children:any[] = [];
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
    this.child = localStorage.getItem('token6');
    this.getChild(this.child);
    }
  
    getChild(id: number){
      this.dataService.getChild(id).subscribe(
        response => {
          console.log(response);
          this.children = response;
          return;
          // this.children = response.items;
        }
      )
    }

}
