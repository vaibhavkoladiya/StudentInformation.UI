import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { students } from 'src/app/models/students.model';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {

  studentDetails: students = {
    id: '',
    firstName: '',
    lastName: '',
    studentId: '',
    email: '',
    gender:'',
    did: 0,
    phoneNumber: 0,
  };

  constructor(private route: ActivatedRoute, private studentservice: StudentsService, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id'); 
        // console.log(id);

        if(id){
          this.studentservice.getStudent(id)
          .subscribe({
            next: (response) => {
              this.studentDetails = response;
            }
          })
        }
      }
    })
  }

  updateStudent(){
    this.studentservice.updateStudent(this.studentDetails.id, this.studentDetails)
    .subscribe({
      next:(response) =>{
        this.router.navigate(['/']); 
      }
    });
  }

  deleteStudent(id: string){
    this.studentservice.deleteStudent(id)
    .subscribe({
      next: (response) => {
        this.router.navigate(['/']);
      }
    })
  }
}
