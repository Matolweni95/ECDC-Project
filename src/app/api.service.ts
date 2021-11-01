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
  this.setToken3(Users[0].userId);
  
  this.getLoggedInName.emit(true);
  return Users;
  }));
  }
  

  public userregistration(name: any,surname: any,email: any,guardian: any, diet:any) {
  return this.httpClient.post<any>(this.baseUrl + '/register.php', { name,surname, email, guardian, diet })
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