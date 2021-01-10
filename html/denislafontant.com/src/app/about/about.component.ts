import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  whoIam = 'I am Denis Lafontant an experienced freelance full-stack web designer and developer, for 15 years I am dedicated to computer sciences especially development, enterprise solutions, and networking. I code with PHP, CSS3, HTML5, Javascript & jQuery, build sites in WordPress, Joomla, Drupal, e-commerce sites in Shopify and Prestashop, and the list continues to grow, I also do digital marketing to promote and grow your business on social networks.';
  coreValue = 'All of the projects that I work on are guided by a strong sense of meticulousness and precision both design and developing. I am passionate about creating a meaningful and unique digital experience for my client\'s users while providing them with confidence and assurance that they are in good hands.';
  
  constructor() { }

  ngOnInit(): void {
  }

}
