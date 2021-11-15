import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service'; 
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-parent-register-form',
  templateUrl: './parent-register-form.component.html',
  styleUrls: ['./parent-register-form.component.css']
})
export class ParentRegisterFormComponent implements OnInit {
  

  showDiv = {
    previous : false,
    current : false,
    next : false, 
    other : false
  }
  isShown: boolean = false ; // hidden by default
show = false;
toggleShow() {
if(this.myDiet === 'Other'){
 
 this.show = !this.show;
}


}
  isLinear = true;
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  thirdFormGroup!: FormGroup;  
  forthFormGroup!: FormGroup;
  fifthFormGroup!: FormGroup;
  sixthFormGroup!: FormGroup;
  seventhFormGroup!: FormGroup;

  myDiet!: string;
  dietRestrictions: string[] = ['None',
                                'Lactose Intolarence',
                                'Gluten Sensitivity',
                                'Vegiterian',
                                'Vegan',
                                'Kosher',
                                'Diabetic',
                                'Other',
                              ];
  myProgram!: string;
  childClass!: string;
  Pname!: string;
  myPrograms: string[] = [
    'After Care',
    'Drop off',
    'Special needs'
  ];
  myClasses: string[] = [
    'Day Care',
    'Play School',
    'Pre School',
    'Pre Grade R',
    'Grade R'

    
  ];

  Form!: FormGroup;
  
  
  
  constructor(private _formBuilder: FormBuilder, private dataService: ApiService,private router:Router) {
  
    
    this.firstFormGroup = this._formBuilder.group({
      Pname: ['', Validators.required],
      Psurname: ['', Validators.required],
      POccupation: ['', Validators.required],
      PEmail: ['', Validators.required],
      Password: ['', Validators.required],
      PNumber: ['', Validators.required],
      Pid: ['', Validators.required],
      Padd1: ['', Validators.required],
      Padd2: ['', Validators.required],
      Padd3: ['', Validators.required],
      Padd4: ['', Validators.required],
      Padd5: ['', Validators.required],
      

    });

    this.secondFormGroup = this._formBuilder.group({
      SPname: ['', Validators.required],
      SPsurname: ['', Validators.required],
      SPOccupation: ['', Validators.required],
      SPEmail: ['', Validators.required],
      SPNumber: ['', Validators.required],
      SPid: ['', Validators.required],
      SPadd1: ['', Validators.required],
      SPadd2: ['', Validators.required],
      SPadd3: ['', Validators.required],
      SPadd4: ['', Validators.required],
      SPadd5: ['', Validators.required],
    });

    this.thirdFormGroup = this._formBuilder.group({
      Cname: ['', Validators.required],
      Csurname: ['', Validators.required],
      CDOB: ['', Validators.required],
      Cid: ['', Validators.required],
      Cimage: ['', Validators.required],
      Ccert: ['', Validators.required],
      
      
    });

    this.forthFormGroup = this._formBuilder.group({
      myDiet: ['', Validators.nullValidator],
      ifOther: ['', Validators.nullValidator],
      
    });

    this.fifthFormGroup = this._formBuilder.group({
      allergies: ['', Validators.required],
      
      
    });

    this.sixthFormGroup = this._formBuilder.group({
      childClass: ['', Validators.nullValidator],
      myProgram: ['', Validators.nullValidator],
    
    });

  }
  

  ngOnInit() {
   
  }

  postdata(firstFormGroup: { value: { 
    Pname: any,
    Psurname: any;
    PEmail:any,
    PNumber:any,
    Padd1:any, 
    POccupation:any, 
    Pid:any,
    Padd2:any,
    Padd3:any,
    Padd4:any,
    Padd5:any}
  }, 
    secondFormGroup:{ value:{
      SPname:any,
      SPsurname:any,
      SPoccupation:any,
      SPEmail:any, 
      SPNumber:any,
      SPid:any,
      SPadd1:any,
      SPadd2:any,
      SPadd3:any, 
      SPadd4:any, 
      SPadd5:any }
    },
      thirdFormGroup:{value: {
      Cname:any,
      Csurname:any,
      CDOB:any,
      Cid:any,
      Cimage:any,
      Ccert:any}
    },
      //  fifthFormGroup:{value:{
      //   allergies:any}
      // },
      _myDiet: any, _childClass:any,_myProgram: any)
{
this.dataService.userregistration(
  firstFormGroup.value.Pname,
  firstFormGroup.value.Psurname,
  firstFormGroup.value.PEmail,
  firstFormGroup.value.PNumber,
  firstFormGroup.value.Padd1, 
  firstFormGroup.value.POccupation, 
  firstFormGroup.value.Pid,
  firstFormGroup.value.Padd2,
  firstFormGroup.value.Padd3,
  firstFormGroup.value.Padd4, 

  secondFormGroup.value.SPname,
  secondFormGroup.value.SPsurname,
  secondFormGroup.value.SPNumber, 
  secondFormGroup.value.SPEmail,
  secondFormGroup.value.SPid, 
  secondFormGroup.value.SPadd1, 
  secondFormGroup.value.SPadd2, 
  secondFormGroup.value.SPadd3,
  secondFormGroup.value.SPadd4,
 
  thirdFormGroup.value.Cname, 
  thirdFormGroup.value.Csurname,
  thirdFormGroup.value.CDOB, 

  // fifthFormGroup.value.allergies,
   this.myDiet, 
   this.childClass, this.myProgram)
.pipe(first())
.subscribe(
data => {

},

error => {
});
}

  submit(){
    
    const data = {

      name: this.myDiet,
      // Pname:this.firstFormGroup.get('Pname')?.value,
      // Psurname: this.firstFormGroup.get('Psurname')?.value,
      // POccupation: this.firstFormGroup.get('POccupation')?.value,
      // PEmail: this.firstFormGroup.get('PEmail')?.value,
      // PNumber: this.firstFormGroup.get('PNumber')?.value,
      // Pid: this.firstFormGroup.get('Pid')?.value,
      // Padd1: this.firstFormGroup.get('Padd1')?.value,
      // Padd2: this.firstFormGroup.get('Padd2')?.value,
      // Padd3: this.firstFormGroup.get('Padd3')?.value,
      // Padd4: this.firstFormGroup.get('Padd4')?.value,
      // Padd5:this.firstFormGroup.get('Padd5')?.value,
    }
    console.log(data)  
  }

}
