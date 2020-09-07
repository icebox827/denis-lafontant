import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.css']
})
export class JumbotronComponent implements OnInit {
  name = 'denis lafontant';
  freelance = 'Full Stack Developer';
  social ='Digital Marketing Freelance';

  constructor() { }

  ngOnInit(): void {
  }

}
