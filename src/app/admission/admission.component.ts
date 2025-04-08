// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-admission',
//   templateUrl: './admission.component.html',
//   styleUrls: ['./admission.component.css']
// })
// export class AdmissionComponent implements OnInit {
  

//   constructor() { }

//   ngOnInit(): void {
//   }

// }

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudentService } from '../service/student.service';

@Component({
  selector: 'app-admission',
  templateUrl: './admission.component.html',
  styleUrls: ['./admission.component.css']
})
export class AdmissionComponent {
 
  admissionForm: FormGroup;
  submitted = false;
  formData:any;
  students: any[] = []; // Store all students


  // JSON object for storing submitted data
  // studentData: any = {};

  constructor(private fb: FormBuilder, private studentservice:StudentService) {
    this.admissionForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      course: ['', Validators.required],
      gender: ['', Validators.required],
      terms: [false, Validators.requiredTrue]
    });
  }

  // Handle form submission
  onSubmit() {
    this.submitted = true;
    if (this.admissionForm.valid) {
      this.formData = this.admissionForm.value;
        // Call the service to add student
        this.studentservice.addStudent(this.formData).subscribe(
          (response) => {
            alert('Form submited Successful!');            
          },
          (error) => {
            console.error('Error adding student:', error);
            alert('An error occurred while submitting the form.');
          }
        );
      } else {
        alert('Please fill all required fields correctly.');
      }
    }
  } 
    
