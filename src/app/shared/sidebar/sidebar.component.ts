import { Component, Renderer2, ElementRef, OnInit } from '@angular/core';



@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  logoUrl = '../../../assets/img/AdminLTELogo.png';
  userImageUrl = '../../../assets/img/user2-160x160.jpg';
  userName!: string;
  constructor(private renderer: Renderer2, private el: ElementRef) {}
  ngOnInit(): void {
    this.userName = sessionStorage.getItem('username') || '';
  }

  //fix the next  function to work on all the sidebar links

  addClass(event: Event): void {
    const target = event.target as HTMLElement;
    this.renderer.addClass(target, 'active');
  }
}
