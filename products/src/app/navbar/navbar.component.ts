import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
    if (window.pageYOffset > 200) {
      let element = document.getElementById('navbar-nav');
      element.classList.add('sticky');
    } else {
      let element = document.getElementById('navbar-nav');
      element.classList.remove('sticky');
    }
  }
}
