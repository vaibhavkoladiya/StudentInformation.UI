import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { AllDepartmentsListComponent } from './components/departments/all-departments-list/all-departments-list.component';
import { DepartmentStudentsComponent } from './components/departments/department-students/department-students.component';
import { LoginRegisterComponent } from './components/login/login-register/login-register.component';
import { RegisterComponent } from './components/login/register/register.component';
import { AddStudentComponent } from './components/students/add-student/add-student.component';
import { AllStudentsListComponent } from './components/students/all-students-list/all-students-list.component';
import { EditStudentComponent } from './components/students/edit-student/edit-student.component';

const routes: Routes = [
  {
    path: '',
    component: AllStudentsListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginRegisterComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'students',
    component: AllStudentsListComponent,
    canActivate: [AuthGuard]
    
  },
  {
    path: 'students/add',
    component: AddStudentComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'students/edit/:id',
    component: EditStudentComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'departments',
    component: AllDepartmentsListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'departments/departmentstudents/:id',
    component: DepartmentStudentsComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
