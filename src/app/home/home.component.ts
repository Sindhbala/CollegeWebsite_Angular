import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  slides = [
    { src: '/assets/Eduction2.jpg', alt: 'college', caption: '' },
    { src: '/assets/Eduction3.webp', alt: 'college', caption: '' },

  ];
  

  about = {
    title: 'About College',
    content: `"GENESIS OF INDIA CULTURE LEAGUE India Culture League was founded in 1942 by a small group of young people under the 
        leadership of Shri (late) Amalendu Roye with the objective of inculcating the spirit of patriotism in the youth 
        through cultural and sports activities. The organization was called “Youth Culture Centre” and had the motto of 
        “Unity and Progress through culture”. After the independence it was re-christened as “India Culture League” which 
        since then is actively promoting Art, Music, Drama, Dance, Sports and Education."`,
    image: '/assets/images (1).jpeg'
  };
  constructor() { }

  ngOnInit(): void {
  }

}
