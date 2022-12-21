import { Component, OnInit } from '@angular/core';
import { department } from 'src/app/models/department.model';
import { DepartmentService } from 'src/app/services/department.service';

@Component({
  selector: 'app-all-departments-list',
  templateUrl: './all-departments-list.component.html',
  styleUrls: ['./all-departments-list.component.css']
})
export class AllDepartmentsListComponent implements OnInit {

  departments: department[]= [];
  constructor(private departmentservice: DepartmentService) { }

  ngOnInit(): void {
    this.departmentservice.getAllDepartment()
    .subscribe({
      next: (department1) => {
        // this.departments = department;
        Object.assign(this.departments,department1);
        
        // console.log(this.departments.Did);
        
      },
      error: (response) =>{
        console.log(response)
      }
    })
  }

}
