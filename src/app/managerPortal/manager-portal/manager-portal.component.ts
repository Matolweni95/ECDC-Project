import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';
@Component({
  selector: 'app-manager-portal',
  templateUrl: './manager-portal.component.html',
  styleUrls: ['./manager-portal.component.css']
})
export class ManagerPortalComponent implements OnInit {

  @ViewChild(MatSidenav)
  sidenav!:MatSidenav;


  ngOnInit(): void {
  }
  loginbtn:boolean;
 logoutbtn:boolean;
 name = localStorage.getItem("token");
 surname = localStorage.getItem("token9")
 type = localStorage.getItem("token1");
 
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
}