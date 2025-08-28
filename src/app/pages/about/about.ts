import { Component } from '@angular/core';
import { NavBar } from '../nav-bar/nav-bar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  imports: [NavBar,CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About {
  backgroundImage = 'bgg.jpg';
  selectedCategory = 'Academic';

  categories = ['Academic', 'Professional Growth', 'Skills', 'Certificates'];

  details = {
    Academic: [
      {
        title: 'Sathyabama Institute of Science and Technology',
        subtitle: 'B.E in Computer Science',
        tech: 'Java, SQL, Web Fundamentals',
        status: 'Graduated 2025'
      }
    ],
    'Professional Growth': [
      {
        title: 'Cognizant Training Program',
        subtitle: 'Full-Stack Development',
        tech: 'Angular, Spring Boot, Spring Data JPA, Spring REST',
        status: 'Currently Training'
      }
    ],
    Skills: [
      'Angular & RxJS',
      'Spring Boot & JPA',
      'SQL'
    ],
    Certificates: [
      {
        name: 'xxxxx',
        issuer: 'xxxxxx',
        year: 'xxxxx'
      },
      {
        name: 'xxxxxx',
        issuer: 'xxxxxx',
        year: 'xxxxx'
      }
    ]
  };

  selectCategory(cat: string) {
    this.selectedCategory = cat;
  }
}
