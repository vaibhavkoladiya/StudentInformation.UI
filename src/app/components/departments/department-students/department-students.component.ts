import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { students } from 'src/app/models/students.model';
import { DepartmentService } from 'src/app/services/department.service';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-department-students',
  templateUrl: './department-students.component.html',
  styleUrls: ['./department-students.component.css']
})
export class DepartmentStudentsComponent implements OnInit {

  departmentstudentslist: students[]= [];

  constructor(private route: ActivatedRoute, private studentsservice:StudentsService,private departmentservice: DepartmentService,  private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');
        // console.log(id);
    

        if(id){
          this.departmentservice.departmentstudents(parseInt(id))
          .subscribe({
            next: (response) => {
              this.departmentstudentslist = response;
              
              // this.allstudents1 = students;
            },
            error: (response) =>{
              console.log(response)
            }
          })
        }
      }
    })
  }



}
