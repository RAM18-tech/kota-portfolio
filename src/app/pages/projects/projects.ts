import { Component } from '@angular/core';
import { NavBar } from '../nav-bar/nav-bar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  imports: [NavBar,CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects {
  backgroundImage = 'bgg.jpg';
  featuredProject = {
  name: 'Portfolio Website',
  tech: 'Angular, SCSS, RxJS',
  image: 'pro.jpg'
};

projects = [
  {
    name: 'Travel Package Booking System',
    tech: 'Spring Boot, Spring Data jpa, Angular',
    image: 'tr.jpg',
    github: 'https://github.com/kota/task-manager',
    website: 'https://taskmanager.kota.dev',
    showLinks: false
  },
  {
    name: 'Cafeteria Management',
    tech: 'Spring Boot, Spring Data jpa, Angular',
    image: 'cafe.jpg',
    github: 'https://github.com/kota/blog-engine',
    website: 'https://blog.kota.dev',
    showLinks: false
  },
  {
    name: 'Portfolio',
    tech: 'HTML, CSS, BootStrap, Angular',
    image: 'p.jpg.png',
    github: 'https://github.com/kota/blog-engine',
    website: 'https://blog.kota.dev',
    showLinks: false
  },
  {
    name: 'Portfolio',
    tech: 'HTML, CSS, BootStrap, Angular',
    image: 'p.jpg.png',
    github: 'https://github.com/kota/blog-engine',
    website: 'https://blog.kota.dev',
    showLinks: false
  },
];

}
