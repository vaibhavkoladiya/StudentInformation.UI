import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllStudentsListComponent } from './components/students/all-students-list/all-students-list.component';
import { AddStudentComponent } from './components/students/add-student/add-student.component';
import { FormsModule } from '@angular/forms';
import { EditStudentComponent } from './components/students/edit-student/edit-student.component';
import { AuthInterceptor } from './services/auth.interceptor';
import { AllDepartmentsListComponent } from './components/departments/all-departments-list/all-departments-list.component';
import { DepartmentStudentsComponent } from './components/departments/department-students/department-students.component';
import { LoginRegisterComponent } from './components/login/login-register/login-register.component';
import { RegisterComponent } from './components/login/register/register.component';
import { AuthGuard } from './auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    AllStudentsListComponent,
    AddStudentComponent,
    EditStudentComponent,
    AllDepartmentsListComponent,
    DepartmentStudentsComponent,
    LoginRegisterComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AuthGuard,
    {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true,   
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
