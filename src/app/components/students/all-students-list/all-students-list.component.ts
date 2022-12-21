import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { error } from 'console';
import { department } from 'src/app/models/department.model';
import { students } from 'src/app/models/students.model';
import { DepartmentService } from 'src/app/services/department.service';
import { StudentsService } from 'src/app/services/students.service';


@Component({
  selector: 'app-all-students-list',
  templateUrl: './all-students-list.component.html',
  styleUrls: ['./all-students-list.component.css']
})
export class AllStudentsListComponent implements OnInit {

  // departmentDetails: department = {
  //   Did: 0,
  //   departmentName: '',
  //   departmentEmail: '',
  //   dphonenumber: 0
  // };

  allstudents: students[]= [];
  // departments: department=;
  constructor(private route: ActivatedRoute, private studentsservice:StudentsService,private departmentservice: DepartmentService,  private router: Router ) { }

  ngOnInit(): void {
    this.studentsservice.getAllStudents()
    .subscribe({
      next: (students) => {
        this.allstudents = students;
        // console.log(this.allstudents);
        // this.allstudents1 = students;
      },
      error: (response) =>{
        console.log(response)
      }
    })

    // console.log(this.allstudents);




    // this.departmentservice.getAllDepartment()
    // .subscribe({
    //   next: (departm) => {
    //     this.departments = departm;
    //     // this.allstudents1 = students;
    //   },
    //   error: (response) =>{
    //     console.log(response)
    //   }
    // })
    
  }

  // getDepartment(id: number){
  //   this.departmentservice.getDepartment(id)
  //   .subscribe({
  //     next: (dpt) => {
  //       console.log(dpt)
  //       this.departmentDetails = dpt;
  //     },
  //     error: (response) =>{
  //       console.log(response)
  //     }

  //   })
  // }
}



