import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { department } from 'src/app/models/department.model';
import { students } from 'src/app/models/students.model';
import { DepartmentService } from 'src/app/services/department.service';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  addStudentRequest: students= {
    id: '',
    firstName: '',
    lastName: '',
    studentId: '',
    email: '',
    gender:'',
    did: 0,
    phoneNumber: 0,
   }

   studepartments: department[]= [];
  //  departmnetname: string[]=[];


  constructor(private studentsservice:StudentsService,private departmentservice:DepartmentService, private router: Router ) { }
  
  ngOnInit(): void {
    this.departmentservice.getAllDepartment()
    .subscribe({
      next: (dpt) => {
        this.studepartments = dpt;

      },
      error: (response) =>{
        console.log(response)
      }
    })
  }

  addStudent(){
    this.studentsservice.addStudent(this.addStudentRequest)
    .subscribe({
      next: (student) => {
       this.router.navigate(['/']); 
      //  console.log(student);
       
      }

    })
  }
}
