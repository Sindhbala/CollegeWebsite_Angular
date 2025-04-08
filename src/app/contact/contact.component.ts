import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  mapWidth: number = 300; // Default width for the map

  // Form data
  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  // Resize the map by a given scale factor
  resizeMap(scaleFactor: number): void {
    this.mapWidth *= scaleFactor;
  }

  // Handle the form submission
  sendMessage(): void {
    console.log('Form Data:', this.formData);
    alert('Message Sent Successfully!');
    // You can integrate your API call here
  }


  constructor() { }

  ngOnInit(): void {
  }

}
