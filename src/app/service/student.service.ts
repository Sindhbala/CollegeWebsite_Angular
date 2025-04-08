// import { Injectable } from '@angular/core';


// @Injectable({
//   providedIn: 'root'
// })
// export class StudentService {

//   constructor() { }
// }

import { HttpClient } from '@angular/common/http';
// import { createMayBeForwardRefExpression } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private apiUrl = `http://localhost:3000/student`; //Backend API ka URL

  constructor( private Http :HttpClient) {}

    // Student ko add karne ke liye method
  addStudent(data:any): Observable<any>{
    return this.Http.post(this.apiUrl,data);
  }

  getStudents(): Observable<any>{
    return this.Http.get(this.apiUrl);   
  }

  deleteStudent(studentId: number): Observable<any> {
    return this.Http.delete(`${this.apiUrl}/${studentId}`);
  }

  updateStudent(id: number, data: any): Observable<any> {
    return this.Http.put(`${this.apiUrl}/${id}`, data);
  }
 
  
  
}

