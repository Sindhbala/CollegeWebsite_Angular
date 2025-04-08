import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.css']
})
export class FacultyComponent implements OnInit {

  instructors = [
    {
      name: 'Instructor 1',
      instagram: 'https://instagram.com/instructor1',
      twitter: 'https://twitter.com/instructor1',
      designation: 'Professor',
      image: '/assets/photo1.jpg',
      
    },
    {
      name: 'Instructor 2',
      designation: 'Lecturer',
      image: '/assets/photo2.png',
      instagram: 'https://instagram.com/instructor2',
      twitter: 'https://twitter.com/instructor2',
    },
    {
      name: 'Instructor 3',
      designation: 'Assistant Professor',
      image: '/assets/photo31.jpeg',
      instagram: 'https://instagram.com/instructor3',
      twitter: 'https://twitter.com/instructor3',
    },
    {
      name: 'Instructor 4',
      designation: 'Research Scholar',
      image: '/assets/photo41.jpg',
      instagram: 'https://instagram.com/instructor4',
      twitter: 'https://twitter.com/instructor4',
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
