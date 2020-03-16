import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {

  openResume() {
    window.open('/assets/pdfs/Nirav_Jadav_FL.pdf', '_blank');
  }

  constructor() { }

  ngOnInit() {
  }

}
