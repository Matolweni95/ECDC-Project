import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogConfig } from '@angular/material/dialog';
@Component({
  selector: 'app-centre-educators',
  templateUrl: './centre-educators.component.html',
  styleUrls: ['./centre-educators.component.css']
})
export class CentreEducatorsComponent implements OnInit {

  displayColumns = ['id', 'type','name','email', 'password','crudBtns'];
  post:any[]  = [];
  dataSource!: MatTableDataSource<any>;
  angForm: FormGroup;
  constructor(private http: HttpClient,private fb: FormBuilder,private dataService: ApiService,private router:Router, private dialog: MatDialog) { 
    this.angForm = this.fb.group({
      email: ['', [Validators.required,Validators.minLength(1), Validators.email]],
      password: ['', Validators.required],
      name: ['', Validators.required],
      type: ['', Validators.required],
      mobile: ['', Validators.required]
      });

    this.http.get('http://localhost/angular-admin/php/fetch_data.php').subscribe(data => {
      this.post.push(data);
      this.dataSource = new MatTableDataSource(this.post[0]);
    })
  }

  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;
 
  ngOnInit(){
    
    setTimeout(() => this.dataSource.paginator = this.paginator);
  
  }
  
  // postlearner(angForm1: { value: { name: any; email: any; password: any; type:any}; })
  // {
  // this.dataService.userregistration(angForm1.value.name,angForm1.value.email,angForm1.value.password)
  // .pipe(first())
  // .subscribe(
  
  // error => {
  // });
  // }



  onEdit(){
    
  }
  
  get email() { return this.angForm.get('email'); }
  get password() { return this.angForm.get('password'); }
  get name() { return this.angForm.get('name'); }
  get type() { return this.angForm.get('type'); }


  
}

export interface PeriodicElement {
  id: number;
  type: string,
  name: string;
  email:string;
  password:string;
}
