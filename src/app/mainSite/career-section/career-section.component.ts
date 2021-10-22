import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class Vacancies {
  constructor (public vacancyId: number, 
              public jobTitle: string,
              public jobDescription: string,
              ){
            }}
  
@Component({
  selector: 'app-career-section',
  templateUrl: './career-section.component.html',
  styleUrls: ['./career-section.component.css']
})
export class CareerSectionComponent implements OnInit {

  vacancies:any[] = [];


  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getNotifs();
  }

  getNotifs(){
    this.http.get<any>('http://localhost/FinalProj/php/vacancies.php').subscribe(
      response => {
        console.log(response);
        this.vacancies = response;
      }
    )
  }
}
