import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavBar } from '../nav-bar/nav-bar';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink , CommonModule,NavBar],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  backgroundImage = 'bgg.jpg';
  profileImage = 'kota.png'
}
