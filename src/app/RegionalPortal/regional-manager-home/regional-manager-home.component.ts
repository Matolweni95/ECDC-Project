import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
export class Notification {
  constructor(public id: number,
    public title: string,
    public message: string) {
  }
}

@Component({
  selector: 'app-regional-manager-home',
  templateUrl: './regional-manager-home.component.html',
  styleUrls: ['./regional-manager-home.component.css']
})
export class RegionalManagerHomeComponent implements OnInit {
  centers: any[] = [];
  managers: any[] = [];
  funds: any[] = [];
  notifications: any[] = [];
  size = 5;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getCentres();
    this.getManagers();
    this.getFunds();
  }

  getCentres() {
    this.http.get<any>(`${environment.baseUrl}/fetchCenters.php`).subscribe(
      response => {
        this.centers = response.slice(0, this.size);
      }
    );
  }

  getManagers() {
    this.http.get<any>(`${environment.baseUrl}/fetchManagers.php`).subscribe(
      response => {
        this.managers = response.slice(0, this.size);
      }
    );
  }

  getFunds() {
    this.http.get<any>(`${environment.baseUrl}/fetchFunds.php`).subscribe(
      response => {
        this.funds = response.slice(0, this.size);
      }
    );
  }
}
