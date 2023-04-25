import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  logoUrl = '../../../assets/img/AdminLTELogo.png';
  userImageUrl = '../../../assets/img/user2-160x160.jpg';
  constructor() { }

  ngOnInit(): void {
  }

}
