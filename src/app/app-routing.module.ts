import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AboutPageComponent } from './mainSite/about-page/about-page.component';
import { CareerSectionComponent } from './mainSite/career-section/career-section.component';
import { ContactSectionComponent } from './mainSite/contact-section/contact-section.component';
import { CurriculumSectionComponent } from './mainSite/curriculum-section/curriculum-section.component';
import { FeesSectionComponent } from './mainSite/fees-section/fees-section.component';
import { HomeSectionComponent } from './mainSite/home-section/home-section.component';
import { LoginSectionComponent } from './mainSite/login-section/login-section.component';
import { StaffSectionComponent } from './mainSite/staff-section/staff-section.component';
import { MychildrenComponent } from './parentPortal/mychildren/mychildren.component';
import { ParentApplicationComponent } from './parentPortal/parent-application/parent-application.component';
import { ParentHomeComponent } from './parentPortal/parent-home/parent-home.component';
import { ParentPortalComponent } from './parentPortal/parent-portal/parent-portal.component';
import { ParentProfileComponent } from './parentPortal/parent-profile/parent-profile.component';

import { MountainChatComponent } from './mountainchat/mountain-chat/mountain-chat.component';
import { Term1Component } from './parentPortal/progress/term1/term1.component';
import { Term2Component } from './parentPortal/progress/term2/term2.component';
import { Term3Component } from './parentPortal/progress/term3/term3.component';
import { Term4Component } from './parentPortal/progress/term4/term4.component';
import { ParentPaymentComponent } from './parentPortal/parent-payment/parent-payment.component';
import { ApplicantViewComponent } from './managerPortal/applicant-view/applicant-view.component';
import { ApplicationViewComponent } from './managerPortal/application-view/application-view.component';
import { CentreApplicationsComponent } from './managerPortal/centre-applications/centre-applications.component';
import { CentreEducatorsComponent } from './managerPortal/centre-educators/centre-educators.component';
import { CentreFundsComponent } from './managerPortal/centre-funds/centre-funds.component';
import { FundingApplicationComponent } from './managerPortal/funding-application/funding-application.component';
import { ManagerCentreFeesComponent } from './managerPortal/manager-centre-fees/manager-centre-fees.component';
import { ManagerChildResultComponent } from './managerPortal/manager-child-result/manager-child-result.component';
import { ManagerHomeComponent } from './managerPortal/manager-home/manager-home.component';
import { ManagerNotificationsComponent } from './managerPortal/manager-notifications/manager-notifications.component';
import { ManagerProfileComponent } from './managerPortal/manager-profile/manager-profile.component';
import { TeacherTemplateComponent } from './managerPortal/teacher-template/teacher-template.component';
import { TeacherTemplateEditableComponent } from './managerPortal/teacher-template-editable/teacher-template-editable.component';
import { CentreGeneralStaffComponent } from './managerPortal/centre-general-staff/centre-general-staff.component';
import { CentreKidsComponent } from './managerPortal/centre-kids/centre-kids.component';
import { ManagerPortalComponent } from './managerPortal/manager-portal/manager-portal.component';
import { AttendenceComponent } from './teacherPortal/attendence/attendence.component';
import { ReportEditComponent } from './teacherPortal/report-edit/report-edit.component';
import { ReportLearnersComponent } from './teacherPortal/report-learners/report-learners.component';
import { ReportViewComponent } from './teacherPortal/report-view/report-view.component';
import { TeacherHomeComponent } from './teacherPortal/teacher-home/teacher-home.component';
import { TeacherPortalComponent } from './teacherPortal/teacher-portal/teacher-portal.component';
import { TeacherProfileComponent } from './teacherPortal/teacher-profile/teacher-profile.component';
import { TeacherTaskComponent } from './teacherPortal/teacher-task/teacher-task.component';
import { ApplicationApprovalComponent } from './RegionalPortal/application-approval/application-approval.component';
import { FinancialApprovalComponent } from './RegionalPortal/financial-approval/financial-approval.component';
import { RegionalManagerHomeComponent } from './RegionalPortal/regional-manager-home/regional-manager-home.component';
import { RegionalManagerPortalComponent } from './RegionalPortal/regional-manager-portal/regional-manager-portal.component';
import { RegionalManagerProfileComponent } from './RegionalPortal/regional-manager-profile/regional-manager-profile.component';
import { SyllabusComponent } from './RegionalPortal/syllabus/syllabus.component';
import { AdminPortalComponent } from './adminPortal/admin-portal/admin-portal.component';
import { AdminHomeComponent } from './adminPortal/admin-home/admin-home.component';
import { LiaisonPortalComponent } from './liaisonPortal/liaison-portal/liaison-portal.component';
import { LiaisonHomeComponent } from './liaisonPortal/liaison-home/liaison-home.component';
import { TeacherRegisterPortalComponent } from './registration/Teacher/teacher-register-portal/teacher-register-portal.component';
import { TeacherRegisterFormComponent } from './registration/Teacher/teacher-register-form/teacher-register-form.component';
import { ParentRegisterPortalComponent } from './registration/Parent/parent-register-portal/parent-register-portal.component';
import { ParentRegisterFormComponent } from './registration/Parent/parent-register-form/parent-register-form.component';


const routes: Routes = [
  { path: '', component: HomeSectionComponent },
  { path: 'About', component: AboutPageComponent },
  
  { path: 'Curriculum', component: CurriculumSectionComponent},
  { path: 'Staff', component: StaffSectionComponent },
  { path: 'Fees', component: FeesSectionComponent },
  { path: 'Contact-us', component: ContactSectionComponent },
  { path: 'Login', component: LoginSectionComponent},
  { path: 'Careers', component:CareerSectionComponent},

  { path: 'Teacher-Registration', component:TeacherRegisterPortalComponent, 
children:[
  { path: 'Teacher-Application', component:TeacherRegisterFormComponent},

]},

  { path: 'Parent-Registration', component:ParentRegisterPortalComponent, 
children:[
  { path: 'Parent-Application', component:ParentRegisterFormComponent},
]},



  //parent paths begin

{ path: 'Parent-Portal', component: ParentPortalComponent,
children: [
  { path: 'Parent-home', component: ParentHomeComponent},
  { path: 'MyChildren', component: MychildrenComponent,
children:[
  { path: 'Term1', component: Term1Component },
  { path: 'Term2', component: Term2Component },
  { path: 'Term3', component: Term3Component },
  { path: 'Term4', component: Term4Component}

]},
  { path: 'Admissions', component: ParentApplicationComponent},
  { path: 'PayPortal', component: ParentPaymentComponent},
  { path: 'MountainChat', component: MountainChatComponent},
  { path: 'MyProfile', component: ParentProfileComponent}
]},

//parent paths end


  //Manager paths begin

  { path: 'Manager-Portal', component: ManagerPortalComponent,
  children: [
    { path: 'Manager-Home', component: ManagerHomeComponent},
    { path: 'Mountain-Kids', component: CentreKidsComponent},
    { path: 'Mountain-Teachers', component: CentreEducatorsComponent},
    { path: 'Mountain-Staff', component: CentreGeneralStaffComponent},
    { path: 'MyProfile', component: ManagerProfileComponent},
    { path: 'MountainChat', component: MountainChatComponent},
    { path: 'Mountain-Funds', component: CentreFundsComponent},
    { path: 'Fund-Application', component: FundingApplicationComponent},
    { path: 'Mountain-Applications', component: CentreApplicationsComponent},
    { path: 'View-Child', component: ManagerChildResultComponent},
    
    { path: 'Edit-Teacher', component: TeacherTemplateEditableComponent},
    { path: 'View-Teacher', component: TeacherTemplateComponent},
    { path: 'View-Application', component: ApplicationViewComponent},
    { path: 'Notification', component: ManagerNotificationsComponent},
    { path: 'Fees', component: ManagerCentreFeesComponent},
  
  ]},
  
  //Manager paths end

  //Teacher Begin
  { path: 'Teacher-Portal', component: TeacherPortalComponent,
children:[
  { path: 'Teacher-home', component: TeacherHomeComponent},
  { path: 'MyProfile', component: TeacherProfileComponent},
  { path: 'MountainChat', component: MountainChatComponent},
  { path: 'Edit-Report', component: ReportEditComponent},
  { path: 'View-Report', component: ReportViewComponent},
  { path: 'Reports', component: ReportLearnersComponent},
  { path: 'Task', component: TeacherTaskComponent},
  { path: 'Attendence', component: AttendenceComponent},
  
]},
  //Teacher Ends
  
  //RegionalCOO paths begin
{ path: 'Regional-Portal', component: RegionalManagerPortalComponent,
children:[
  { path: 'Regional-Home', component: RegionalManagerHomeComponent},
  { path: 'Regional-Syllabus', component: SyllabusComponent},
  { path: 'MountainChat', component: MountainChatComponent},
  { path: 'Regional-Financial', component: FinancialApprovalComponent},
  { path: 'Regional-Screen', component: ApplicationApprovalComponent},
  { path: 'MyProfile', component: RegionalManagerProfileComponent},
  { path: 'Applicant-View', component: ApplicationViewComponent},
]},
//RegionalCOO paths end

//Admin paths begin
{ path: 'Admin-Portal', component: AdminPortalComponent,
children:[
  { path: 'Dashboard', component: AdminHomeComponent},

]},

//Admin paths end

//Liaison Paths begin
{ path: 'Liaison-Portal', component: LiaisonPortalComponent,
children:[
  { path: 'Liaison-Home', component: LiaisonHomeComponent},

]},

//Liaison Paths end
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
