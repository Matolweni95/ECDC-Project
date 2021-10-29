import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';
@Component({
  selector: 'app-teacher-register-portal',
  templateUrl: './teacher-register-portal.component.html',
  styleUrls: ['./teacher-register-portal.component.css']
})
export class TeacherRegisterPortalComponent implements OnInit {

  @ViewChild(MatSidenav)
  sidenav!:MatSidenav;

 ngOnInit() {
 
}

 
constructor( private observer:BreakpointObserver ) {

}
ngAfterViewInit() {
  this.observer.observe(['(max-width:1800px)']).subscribe((res) => {
   if (res.matches) {
     this.sidenav.mode = "over";
     this.sidenav.close();
   }else {
     this.sidenav.mode = "side"
     this.sidenav.open();
   }
  });
}

}