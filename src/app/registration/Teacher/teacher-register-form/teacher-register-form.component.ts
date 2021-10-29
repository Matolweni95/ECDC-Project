import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
@Component({
  selector: 'app-teacher-register-form',
  templateUrl: './teacher-register-form.component.html',
  styleUrls: ['./teacher-register-form.component.css']
})
export class TeacherRegisterFormComponent implements OnInit {

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
  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.isShown = false;
    this.firstFormGroup = this._formBuilder.group({
      Pname: ['', Validators.required],
      Psurname: ['', Validators.required],
      POccupation: ['', Validators.required],
      PWork: ['', Validators.required],
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
      SPWork: ['', Validators.required],
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
      restrict1: ['', Validators.required],
      restrict2: ['', Validators.required],
      restrict3: ['', Validators.required],
      restrict4: ['', Validators.required],
      restrict5: ['', Validators.required],
      ifOther: ['', Validators.required],
      
    });

    this.fifthFormGroup = this._formBuilder.group({
      Cname: ['', Validators.required],
      Csurname: ['', Validators.required],
      CDOB: ['', Validators.required],
      Cid: ['', Validators.required],
      Cimage: ['', Validators.required],
      Ccert: ['', Validators.required],
      
    });

    this.sixthFormGroup = this._formBuilder.group({
      Cname: ['', Validators.required],
      Csurname: ['', Validators.required],
      CDOB: ['', Validators.required],
      Cid: ['', Validators.required],
      Cimage: ['', Validators.required],
      Ccert: ['', Validators.required],
      
    });

  }

  

  submit(){
      
  }

}