import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

import { MountainChatComponent } from './mountainchat/mountain-chat/mountain-chat.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutPageComponent } from './mainSite/about-page/about-page.component';
import { BannerSectionComponent } from './mainSite/banner-section/banner-section.component';
import { BannerComponent } from './mainSite/banner/banner.component';
import { CareerSectionComponent } from './mainSite/career-section/career-section.component';
import { CurriculumSectionComponent } from './mainSite/curriculum-section/curriculum-section.component';
import { FeesSectionComponent } from './mainSite/fees-section/fees-section.component';
import { FooterComponent } from './mainSite/footer/footer.component';
import { HeaderComponent } from './mainSite/header/header.component';
import { HomeSectionComponent } from './mainSite/home-section/home-section.component';
import { LoginSectionComponent } from './mainSite/login-section/login-section.component';
import { StaffSectionComponent } from './mainSite/staff-section/staff-section.component';
import { ContactSectionComponent } from './mainSite/contact-section/contact-section.component';
import { MychildrenComponent } from './parentPortal/mychildren/mychildren.component';
import { ParentApplicationComponent } from './parentPortal/parent-application/parent-application.component';
import { ParentHomeComponent } from './parentPortal/parent-home/parent-home.component';
import { ParentPortalComponent } from './parentPortal/parent-portal/parent-portal.component';
import { ParentProfileComponent } from './parentPortal/parent-profile/parent-profile.component';
import { ProgressComponent } from './parentPortal/progress/progress.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatTabsModule} from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButton } from '@angular/material/button';
import { MatButtonModule } from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select'; 
import { MatDialogModule} from '@angular/material/dialog';
import { MatStepperModule} from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox'; 
import { MatCardModule} from '@angular/material/card'; 
import {MatDatepickerModule} from '@angular/material/datepicker'; 
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { Term1Component } from './parentPortal/progress/term1/term1.component';
import { Term2Component } from './parentPortal/progress/term2/term2.component';
import { Term3Component } from './parentPortal/progress/term3/term3.component';
import { Term4Component } from './parentPortal/progress/term4/term4.component';
import { ParentPaymentComponent } from './parentPortal/parent-payment/parent-payment.component';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
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
import { TeacherHomeComponent } from './teacherPortal/teacher-home/teacher-home.component';
import { TeacherProfileComponent } from './teacherPortal/teacher-profile/teacher-profile.component';
import { TeacherPortalComponent } from './teacherPortal/teacher-portal/teacher-portal.component';
import { TeacherTaskComponent } from './teacherPortal/teacher-task/teacher-task.component';
import { AttendenceComponent } from './teacherPortal/attendence/attendence.component';
import { ReportLearnersComponent } from './teacherPortal/report-learners/report-learners.component';
import { ReportEditComponent } from './teacherPortal/report-edit/report-edit.component';
import { ReportViewComponent } from './teacherPortal/report-view/report-view.component';
import { RegionalManagerHomeComponent } from './RegionalPortal/regional-manager-home/regional-manager-home.component';
import { RegionalManagerPortalComponent } from './RegionalPortal/regional-manager-portal/regional-manager-portal.component';
import { RegionalManagerProfileComponent } from './RegionalPortal/regional-manager-profile/regional-manager-profile.component';
import { FinancialApprovalComponent } from './RegionalPortal/financial-approval/financial-approval.component';
import { ApplicationApprovalComponent } from './RegionalPortal/application-approval/application-approval.component';
import { SyllabusComponent } from './RegionalPortal/syllabus/syllabus.component';
import { AdminPortalComponent } from './adminPortal/admin-portal/admin-portal.component';
import { AdminHomeComponent } from './adminPortal/admin-home/admin-home.component';
import { AdminTeacherComponent } from './adminPortal/Teacher/admin-teacher/admin-teacher.component';
import { AdminParentComponent } from './adminPortal/Parent/admin-parent/admin-parent.component';
import { AdminManagerComponent } from './adminPortal/Manager/admin-manager/admin-manager.component';
import { AdminCoordinatorComponent } from './adminPortal/Coordinator/admin-coordinator/admin-coordinator.component';
import { AdminLiaisonComponent } from './adminPortal/Liaison/admin-liaison/admin-liaison.component';
import { LiaisonPortalComponent } from './liaisonPortal/liaison-portal/liaison-portal.component';
import { LiaisonHomeComponent } from './liaisonPortal/liaison-home/liaison-home.component';
import { LiaisonProfileComponent } from './liaisonPortal/liaison-profile/liaison-profile.component';
import { TeacherRegisterPortalComponent } from './registration/Teacher/teacher-register-portal/teacher-register-portal.component';
import { TeacherRegisterFormComponent } from './registration/Teacher/teacher-register-form/teacher-register-form.component';
import { ParentRegisterPortalComponent } from './registration/Parent/parent-register-portal/parent-register-portal.component';
import { ParentRegisterFormComponent } from './registration/Parent/parent-register-form/parent-register-form.component';
import { ManagerAssignComponent } from './managerPortal/manager-assign/manager-assign.component';
import { ChildViewerComponent } from './managerPortal/child-viewer/child-viewer.component';
import { ManagerFeesViewerComponent } from './managerPortal/manager-fees-viewer/manager-fees-viewer.component';
import { ManagerFeeEditComponent } from './managerPortal/manager-fee-edit/manager-fee-edit.component';
import { ManagerViewProgressComponent } from './managerPortal/manager-view-progress/manager-view-progress.component';
import { TestComponent } from './managerPortal/test/test.component';
import { ReportTemplateComponent } from './managerPortal/report-template/report-template.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,

    DashboardComponent,
    AboutPageComponent,
    BannerSectionComponent,
    BannerComponent,
    CareerSectionComponent,
    CurriculumSectionComponent,
    FeesSectionComponent,
    FooterComponent,
    HeaderComponent,
    HomeSectionComponent,
    LoginSectionComponent,
    StaffSectionComponent,
    ContactSectionComponent,
    MychildrenComponent,
    ParentApplicationComponent,
    ParentHomeComponent,
    ParentPortalComponent,
    ParentProfileComponent,
    ProgressComponent,
    MountainChatComponent,
    Term1Component,
    Term2Component,
    Term3Component,
    Term4Component,
    ParentPaymentComponent,
    ApplicantViewComponent,
    ApplicationViewComponent,
    CentreApplicationsComponent,
    CentreEducatorsComponent,
    CentreFundsComponent,
    FundingApplicationComponent,
    ManagerCentreFeesComponent,
    ManagerChildResultComponent,
    ManagerHomeComponent,
    ManagerNotificationsComponent,
    ManagerProfileComponent,
    TeacherTemplateComponent,
    TeacherTemplateEditableComponent,
    CentreGeneralStaffComponent,
    CentreKidsComponent,
    ManagerPortalComponent,
    TeacherHomeComponent,
    TeacherProfileComponent,
    TeacherPortalComponent,
    TeacherTaskComponent,
    AttendenceComponent,
    ReportLearnersComponent,
    ReportEditComponent,
    ReportViewComponent,
    RegionalManagerHomeComponent,
    RegionalManagerPortalComponent,
    RegionalManagerProfileComponent,
    FinancialApprovalComponent,
    ApplicationApprovalComponent,
    SyllabusComponent,
    AdminPortalComponent,
    AdminHomeComponent,
    AdminTeacherComponent,
    AdminParentComponent,
    AdminManagerComponent,
    AdminCoordinatorComponent,
    AdminLiaisonComponent,
    LiaisonPortalComponent,
    LiaisonHomeComponent,
    LiaisonProfileComponent,
    TeacherRegisterPortalComponent,
    TeacherRegisterFormComponent,
    ParentRegisterPortalComponent,
    ParentRegisterFormComponent,
    ManagerAssignComponent,
    ChildViewerComponent,
    ManagerFeesViewerComponent,
    ManagerFeeEditComponent,
    ManagerViewProgressComponent,
    TestComponent,
    ReportTemplateComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatPaginatorModule,
    MatButtonModule,
    MatTabsModule,
    MatDialogModule,   
    MatSidenavModule,
    MatIconModule,
    MatDividerModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatStepperModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatCheckboxModule,
    MatNativeDateModule,
    MatDatepickerModule
  ],
  providers: [
    {
      provide: 'externalUrlRedirectResolver',
      useValue: (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) =>
      {
          window.location.href = (route.data as any).externalUrl;
      }
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
