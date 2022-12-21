import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { department } from '../models/department.model';
import { students } from '../models/students.model';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
 
  baseUpiUrl : string = environment.baseApiUrl; 
  constructor(private http: HttpClient) { }

  getAllDepartment(): Observable<department[]>{
    return this.http.get<department[]>(this.baseUpiUrl + '/api/Department');
  }

  getDepartment(id: number): Observable<department>{
    return this.http.get<department>(this.baseUpiUrl + '/api/Department/' + id);
  }

  departmentstudents(id: number): Observable<any>{
    console.log("vaibhav");
    return this.http.get<any>(this.baseUpiUrl + '/api/Department/departmentstudents/' + id);
    
  }

}
