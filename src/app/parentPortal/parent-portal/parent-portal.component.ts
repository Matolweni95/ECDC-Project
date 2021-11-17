import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';
@Component({
  selector: 'app-parent-portal',
  templateUrl: './parent-portal.component.html',
  styleUrls: ['./parent-portal.component.css']
})
export class ParentPortalComponent implements OnInit {
  @ViewChild(MatSidenav)
  sidenav!:MatSidenav;

  ngOnInit(): void {
    this.test = localStorage.getItem('token');
    this.test1 = localStorage.getItem('token9');
    this.onload(this.test, this.test1);
  }

 loginbtn:boolean;
 logoutbtn:boolean;
 name = localStorage.getItem("token");
 type = localStorage.getItem("token1");
 surname = localStorage.getItem('token9');

 test:any;
 test1:any;
 test3: any;
 test4:any;
 value:any[] = [];

 
constructor(private dataService: ApiService, private observer:BreakpointObserver ) {
dataService.getLoggedInName.subscribe(name => this.changeName(name));
if(this.dataService.isLoggedIn())
{
console.log("loggedin");
this.loginbtn=false;
this.logoutbtn=true;
this.dataService.getToken();
console.log(localStorage.getItem('token'));


}
else{
this.loginbtn=true;
this.logoutbtn=false
}

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

private changeName(name: boolean): void {
this.logoutbtn = name;
this.loginbtn = !name;
}
logout()
{
this.dataService.deleteToken();
window.location.href = "/";
}

onload(test: any, test1:any){
  this.dataService.FindChild(test, test1).subscribe(
    response => {
      this.value = response;
      this.test3 = this.value[0];
      this.test4 = this.test3['parentId'];
      localStorage.setItem('token3', this.test4);
      console.log(this.test4)
      return;
})
}
}