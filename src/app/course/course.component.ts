// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-course',
//   templateUrl: './course.component.html',
//   styleUrls: ['./course.component.css']
// })
// export class CourseComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }

import { Component } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
styleUrls:['./course.component.css']
})
export class CourseComponent {
  courses = [
    {
      title: "BACHELOR'S OF ARTS",
      image: '/assets/BA-Degree.jpg',
      buttonText: 'Explore Arts',
      

    },
    {
      title: "BACHELOR'S COMMERCE",
      image: '/assets/calculate.svg',
      buttonText: 'Learn Commerce',

    },
    {
      title: 'SCIENCE',
      image: '/assets/science.webp',
      buttonText: 'Discover Science',

    },
    {
      title: 'SELF-FINANCE',
      image: '/assets/self finance.jpg',
      buttonText: 'Learn Finance',

    },
    {
      title: 'P.G',
      image: '/assets/pg.jpg',
      buttonText: 'Postgraduate Info',

    },
    {
      title: 'RESEARCH',
      image: '/assets/research.jpg',
      buttonText: 'Research More',

    },
  ];
}

