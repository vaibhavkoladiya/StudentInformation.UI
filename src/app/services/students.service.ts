import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { students } from '../models/students.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  baseUpiUrl : string = environment.baseApiUrl; 
  constructor(private http: HttpClient) { }

  getAllStudents(): Observable<any>{
    return this.http.get<any>(this.baseUpiUrl + '/api/StudentInffo');
  }

  addStudent(addStudentRequest: students): Observable<students> {
    addStudentRequest.id = '00000000-0000-0000-0000-000000000000';
    console.log(addStudentRequest.did);
    
    return this.http.post<students>(this.baseUpiUrl + '/api/StudentInffo',addStudentRequest);
  }

  getStudent(id: string): Observable<students>{
    // console.log('xx');
    return this.http.get<students>(this.baseUpiUrl + '/api/StudentInffo/' + id);
    

  }

  GetDepartmentOfallStudent(): Observable<any>{
    return this.http.get<any>(this.baseUpiUrl + '/api/StudentInffo/GetDepartmentOfallStudent');
  }
  

  updateStudent(id: string , updateStudentRequest: students): Observable<students>{
    return this.http.put<students>(this.baseUpiUrl + '/api/StudentInffo/' + id, updateStudentRequest);
  }

  deleteStudent(id: string): Observable<students>{
    return this.http.delete<students>(this.baseUpiUrl + '/api/StudentInffo/' + id);
  }
}
