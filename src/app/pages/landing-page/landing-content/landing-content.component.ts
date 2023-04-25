import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-content',
  templateUrl: './landing-content.component.html',
  styleUrls: ['./landing-content.component.css']
})
export class LandingContentComponent implements OnInit {
  username: string = 'John Doe';
  userCount: number = 1000;
  constructor() { }

  ngOnInit(): void {
  }

}
