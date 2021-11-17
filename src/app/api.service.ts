import { Injectable, Output, EventEmitter } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Users } from './users';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  redirectUrl: string | undefined;
  baseUrl:string = "http://localhost:8080/FinalProj/php";
  @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();
  constructor(private httpClient : HttpClient, private router:Router) { }

  
  public userlogin(username: any, password: any) {
  alert(username)
  return this.httpClient.post<any>(this.baseUrl + '/login.php', { username, password })
  .pipe(map(Users => {
  this.setToken(Users[0].name);
  this.setToken1(Users[0].surname);
  this.setTokens(Users[0].role);
 
  
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

  public userregistration(
    parentName: any,
    parentSurname: any,
    parentEmailAddress: any, 
    parentContactNo:any,
    firstLineAddress:any ,
    occupation:any,
    relation:any,
    password:any,
    parentId: any,
    secondLineAddress: any, 
    thirdLineAddress:any,
    zip:any,
    
    emergencyName:any,
    emergencySurname:any,
    emergencyContactNo:any,
    emergencyEmailAddress:any,
    emergencyId: any,
    emergencyLine1Address:any,
    emergencyLine2Address:any,
    emergencyLine3Address:any,
    emergencyZip:any,

    childName:any,
    childSurname:any,
    dateOfBirth:any,

    // allergies:any,
    diet:any,
    classes:any,
    additionalprograms:any) {

  return this.httpClient.post<any>(this.baseUrl + '/parent/parent_child_application.php', { 
    parentName,
    parentSurname,
    parentEmailAddress,
    parentContactNo,
    firstLineAddress,
    occupation,
    relation,
    password,
    parentId,
    secondLineAddress, 
    thirdLineAddress,
    zip, 
    emergencyName,
    emergencySurname,
    emergencyContactNo,
    emergencyEmailAddress,
    emergencyId,
    emergencyLine1Address,
    emergencyLine2Address,
    emergencyLine3Address,
    emergencyZip,
    childName,
    childSurname,
    dateOfBirth,

    // allergies,
    diet,
    classes,
    additionalprograms
  })
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

    public payment (firstName: any, lastName: any, nameOnCard:any, cardNumber:any, expiryDate:any, cvv:any, paymentOption: any ) {
      return this.httpClient.post<any>(this.baseUrl + '/parent/payment.php', { firstName, lastName , nameOnCard, 
        cardNumber, expiryDate, cvv, paymentOption})
      .pipe(map(Users => {
      return Users;
      }));
      }

  public insertAssign (classname: any, tid:any ) {
    return this.httpClient.post<any>(this.baseUrl + '/Manager/assignToClass.php', { classname, tid })
    .pipe(map(Users => {
      this.router.navigateByUrl('/Manager-Portal/Mountain-Teachers');
    return Users;
    }));
    }

    public insertFees (desc: any, fees:any, year:any, classes:any, venue:any  ) {
      return this.httpClient.post<any>(this.baseUrl + '/Manager/insertFees.php', { desc, fees, year, classes, venue })
      .pipe(map(Users => {
      return Users;
      }));
    }

    public editFees (fees: any, desc:any, id:any, classes:any, venue:any  ) {
      return this.httpClient.post<any>(this.baseUrl + '/Manager/UpdateFees.php', { fees, desc, id, classes, venue })
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

  public setUser(id: number) {
    return this.httpClient.get<any>(this.baseUrl + '/Manager/setUser.php?id='+ id)
      .pipe(map(Users => {
        return Users;
      }));
  }

  public FindChild(id: number, id2:any) {
    return this.httpClient.get<any>(this.baseUrl + "/Manager/findChild.php?id="+id+"&id2="+ id2)
      .pipe(map(Users => {
        return Users;
      }));
  }

  public fetchParentValue(id: number) {
    return this.httpClient.get<any>(this.baseUrl + '/Manager/fetchApplicationParent.php?id='+ id)
      .pipe(map(Users => {
        return Users;
      }));
  }

  public getTeacherProfile(id: number) {
    return this.httpClient.get<any>(this.baseUrl + '/Manager/fetchTeacherProfile.php?id='+ id)
      .pipe(map(Users => {
        return Users;
      }));
  }

  public getTeacherName(id: number) {
    return this.httpClient.get<any>(this.baseUrl + '/Manager/getTeacherName.php?id='+ id)
      .pipe(map(Users => {
        return Users;
      }));
  }

  public setStatus(id: number) {
    return this.httpClient.get<any>(this.baseUrl + '/Manager/setStatus.php?id='+ id)
      .pipe(map(Users => {
        return Users;
      }));
  }

  public setChild(id: number) {
    return this.httpClient.get<any>(this.baseUrl + '/Manager/setChild.php?id='+ id)
      .pipe(map(Users => {
        return Users;
      }));
  }

  public getChild(id: number) {
    return this.httpClient.get<any>(this.baseUrl + '/Manager/fetchChild.php?id='+ id)
      .pipe(map(Users => {
        return Users;
      }));
  }

  public getApplication(id: number) {
    return this.httpClient.get<any>(this.baseUrl + '/Manager/fetchApplications.php?id='+ id)
      .pipe(map(Users => {
        return Users;
      }));
  }

   public getChildClass(id: number) {
    return this.httpClient.get<any>(this.baseUrl + '/Parent/fetchChildClass.php?id='+ id)
    .pipe(map(Users => {
      return Users;
    }));
}


  public getFeeUpdate(id: number) {
    return this.httpClient.get<any>(this.baseUrl + '/Manager/updateFees.php?id='+ id)
      .pipe(map(Users => {
        return Users;
      }));
  }

  public fetchChildId(id: number) {
    return this.httpClient.get<any>(this.baseUrl + '/parent/getchildId.php?id='+ id)
      .pipe(map(Users => {
        return Users;
      }));
  }

  public deleteNotifs(id: number) {
    return this.httpClient.get<any>(this.baseUrl + '/Manager/deleteNotif.php?id='+ id)
      .pipe(map(Users => {
        return Users;
      }));
  }

  public getChildProgress(child: number, term:string) {
    return this.httpClient.get<any>(this.baseUrl + "/Manager/getProgress.php?child="+child+"&term="+ term)

      .pipe(map(Users => {
        return Users;
      }));
  }
  public updateChildParent(id: number) {
    return this.httpClient.get<any>(this.baseUrl + "/Manager/updatechildParent.php?id="+id)
      .pipe(map(Users => {
        return Users;
      }));
  }
  
  
  public sendContact(name: string, cellno:string, message:any, email:any) {
    return this.httpClient.post<any>(this.baseUrl + '/Manager/sendcontact.php', { name, cellno, message, email})
      .pipe(map(Users => {
      return Users;
      }));
    }

    public filetest(file: object, name: any) {
      console.log(file)
      return this.httpClient.post<any>(this.baseUrl + '/Manager/upload.php', { file, name})
        .pipe(map(Users => {
        return Users;
        }));
      }

    public addManagerNotif(title: string, desc:string, dest:any) {
      return this.httpClient.post<any>(this.baseUrl + '/Manager/addNotif.php', { title, desc, dest})
        .pipe(map(Users => {
          window.location.reload();
        return Users;
        }));
      }

  public getParentChildProgress(child: number, term:string) {
    return this.httpClient.get<any>(this.baseUrl + "/parent/fetchChildReport.php?child="+child+"&term="+ term)
      .pipe(map(Users => {
        return Users;
      }));
  }



  //token
  setToken(token: string) {
  localStorage.setItem('token', token);
  }
  setToken1(token1: string) {
    localStorage.setItem('token9', token1);
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
  localStorage.removeItem('token');//name
  localStorage.removeItem('token1');//role
  localStorage.removeItem('token3');//parentid
  localStorage.removeItem('token4');//teacherid
  localStorage.removeItem('token5');//feeid
  localStorage.removeItem('token6');//childId
  localStorage.removeItem('token7');//notification
  localStorage.removeItem('token8');//test
  localStorage.removeItem('token9');//surname
  localStorage.removeItem('token10');//applicationId
  localStorage.removeItem('temp');//tempParentId

  }
  isLoggedIn() {
  const usertoken = this.getToken();
  if (usertoken != null) {
  return true
  }
  return false;
  }
  }
