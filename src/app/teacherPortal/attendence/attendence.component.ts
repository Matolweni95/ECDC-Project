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


interface Status {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-attendence',
  templateUrl: './attendence.component.html',
  styleUrls: ['./attendence.component.css']
})
export class AttendenceComponent implements OnInit {

  date = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());

  displayColumns = ['id', 'type','name','email', 'password','crudBtns'];
  post:any[]  = [];
  dataSource!: MatTableDataSource<any>;

  status: Status[] = [
    {value: '0', viewValue: 'Present'},
    {value: '1', viewValue: 'Abscent'}
  ];
  constructor(private http: HttpClient,private fb: FormBuilder,private dataService: ApiService,private router:Router, private dialog: MatDialog) { 


    this.http.get('http://localhost/FinalProj/php/fetchNotifs.php').subscribe(data => {
      this.post.push(data);
      this.dataSource = new MatTableDataSource(this.post[0]);
    })
  }

  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;
 
  ngOnInit(){
    
    setTimeout(() => this.dataSource.paginator = this.paginator);
  
  }
  
  onEdit(){
    
  }
   
}

export interface PeriodicElement {
  id: number;
  type: string,
  name: string;
  email:string;
  password:string;
}
