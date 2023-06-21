import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-module-main',
  templateUrl: './edit-module-main.component.html',
  styleUrls: ['./edit-module-main.component.css']
})
export class EditModuleMainComponent implements OnInit {

 
  itemId!: number;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.itemId = params['id'];
    });
    
}}
