import { Injectable, Output, EventEmitter } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Users } from './users';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  redirectUrl: string | undefined;
  baseUrl:string = "http://localhost:8080/FinalProj/php";
  @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();
  constructor(private httpClient : HttpClient) { }

  
  public userlogin(username: any, password: any) {
  alert(username)
  return this.httpClient.post<any>(this.baseUrl + '/login.php', { username, password })
  .pipe(map(Users => {
  this.setToken(Users[0].name);
  this.setTokens(Users[0].role);
  this.setToken3(Users[0].parentId);
  
  this.getLoggedInName.emit(true);
  return Users;
  }));
  }

  public parentProfile(name: any, surname: any, cellno: any, email: any, line1: any, line2: any, city: any, zip: any) {
    return this.httpClient.post<any>(this.baseUrl + '/parent/parentProfile.php', {name, surname, cellno, email, line1, line2, city, zip })
    .pipe(map(Users => {
    return Users;
    }));
    }

  public userregistration(parentName: any,parentSurname: any,parentEmailAddress: any, 
    parentContactNo:any,firstLineAddress:any ,secondLineAddress: any, thirdLineAddress:any,zip:any,
    occupation:any,emergencyName:any,emergencySurname:any,emergencyContactNo:any,emergencyEmailAddress:any,
    emergencyOccupation:any,emergencyLine1Address:any,emergencyLine2Address:any,emergencyLine3Address:any,
    emergencyZip:any,childName:any,childSurname:any,dateOfBirth:any,childDiertaryRestriction:any,
    allergies:any,progam:any,additionalprograms:any) {
  return this.httpClient.post<any>(this.baseUrl + '/parent_child_application.php', { parentName,parentSurname,
    parentEmailAddress,parentContactNo,firstLineAddress,secondLineAddress, thirdLineAddress,zip,
    occupation,emergencyName,emergencySurname,emergencyContactNo,emergencyEmailAddress,
    emergencyOccupation,emergencyLine1Address,emergencyLine2Address,emergencyLine3Address,
    emergencyZip,childName,childSurname,dateOfBirth,childDiertaryRestriction,
    allergies,progam,additionalprograms})
  .pipe(map(Users => {
  return Users;
  }));
  }

  public profileUpdate (name: any,surname: any, cellno:any ,email: any,line1: any, line2:any, city:any, zip:any) {
    return this.httpClient.post<any>(this.baseUrl + '/update.php', { name,surname,cellno, email, line1, line2, city,zip })
    .pipe(map(Users => {
    return Users;
    }));
    }

    
  public getFunding (centre: any, amount: any ) {
    return this.httpClient.post<any>(this.baseUrl + '/Manager/funding.php', { centre, amount })
    .pipe(map(Users => {
    return Users;
    }));
    }

  public getLearners(id: number) {
    return this.httpClient.get<any>(this.baseUrl + '/fetchLearners.php?id='+ id)
      .pipe(map(Users => {
        return Users;
      }));
  }
  
  //token
  setToken(token: string) {
  localStorage.setItem('token', token);
  }

  setTokens(token1: string) {
    localStorage.setItem('token1', token1);
  }

  setToken3(token3: string) {
    localStorage.setItem('token3', token3);
  }
  getToken() {
  return localStorage.getItem('token');
  }
  deleteToken() {
  localStorage.removeItem('token');
  localStorage.removeItem('token1');
  localStorage.removeItem('token3');
  }
  isLoggedIn() {
  const usertoken = this.getToken();
  if (usertoken != null) {
  return true
  }
  return false;
  }
  }