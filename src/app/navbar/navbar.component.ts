// import { Component, OnInit } from '@angular/core';
// import { Router,NavigationEnd } from '@angular/router';
// interface NavLink {
//   label: string;
//   path: string;
//   icon?: string;
// }

// @Component({
//   selector: 'app-navbar',
//   templateUrl: './navbar.component.html',
//   styleUrls: ['./navbar.component.css']
// })

// export class NavbarComponent implements OnInit{
//   navLinks: NavLink[] = [];
  
//   showNavbar: boolean = true;

//   defaultLinks: NavLink[] = [
//     { label: 'HOME', path: '/home', icon: 'fas fa-home' },
//     { label: 'ABOUT', path: '/about' },
//     { label: 'COURSE', path: '/course' },
//     { label: 'FACULTY', path: '/faculty' },
//     { label: 'CONTACT', path: '/contact' },
//     { label: 'ADMISSION', path: '/admission' },
//     { label: 'LOGIN', path: '/login' },
//   ];


  

//   constructor() { }

//   ngOnInit(): void {
//   }

// }


import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

interface NavLink {
  label: string;
  path: string;
  icon?: string;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})

export class NavbarComponent implements OnInit {
  // dynamin menu item array

  navLinks: NavLink[] = [];
  
  showNavbar: boolean = true;

  defaultLinks: NavLink[] = [
    { label: 'HOME', path: '/home', icon: 'fas fa-home' },
    { label: 'ABOUT', path: '/about' },
    { label: 'COURSE', path: '/course' },
    { label: 'FACULTY', path: '/faculty' },
    { label: 'CONTACT', path: '/contact' },
    { label: 'ADMISSION', path: '/admission' },
    { label: 'LOGIN', path: '/login' },
  ];

//admin
  adminLinks: NavLink[] = [
    { label: 'AdminDashboard', path: '/admin', icon: 'fas fa-tachometer-alt' },
    { label: 'DashBoard', path: '/admin/dashboard' },
    { label: 'LOGOUT', path: '/login', icon: 'fas fa-sign-out-alt' },

    // Add more admin links here
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.updateNavLinks();

    // Listen for route changes to toggle the navbar
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.toggleNavbar(event.url);
        this.updateNavLinks();
      }
    });
  }

  // Update navbar links based on login state and user role
  updateNavLinks() {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true'; // check if logged in
    const userRole = localStorage.getItem('userRole'); // get user role

    console.log('Is Logged In:', isLoggedIn);
    console.log('User Role:', userRole);
  
    // If not logged in, show default links (including Login)
    if (!isLoggedIn) {
      this.navLinks = this.defaultLinks;  // Default links show including Login
    } 
    // If logged in and user is admin, show admin links
    else if (isLoggedIn && userRole === 'admin') {
      this.navLinks = this.adminLinks; // Show Admin links
    } 
    // If logged in but user is not admin, show default links (without Login)
    else {
      this.navLinks = this.defaultLinks.filter(link => link.label !== 'LOGIN'); // Hide Login
    }  
    console.log('Nav Links:', this.navLinks);  // Debugging the navLinks array

    // If not logged in, show default links with login
  }

  toggleNavbar(url: string) {
    const hiddenRoutes = ['/login'];
    this.showNavbar = !hiddenRoutes.some((route) => url.startsWith(route));
  }


  // Logout method to clear session and navigate to login
  logout() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userRole');
    this.updateNavLinks();
    this.router.navigate(['/login']);
  }
}
