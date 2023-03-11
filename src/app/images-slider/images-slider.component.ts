import { Component, ElementRef, OnInit, ViewChild, AfterViewInit,QueryList } from '@angular/core';import { Router, ActivatedRoute } from '@angular/router';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-images-slider',
  templateUrl: './images-slider.component.html',
  styleUrls: ['./images-slider.component.css']
})
export class ImagesSliderComponent{

  public selectedindex: number = 0;
  role: Number;
  public images = ['/assets/images/slider1.jpg', '/assets/images/slide4.jpg', '/assets/images/slide7.jpg',
  '/assets/images/slider6.jpg','/assets/images/slider9.jpg','/assets/images/slider10.jpg','/assets/images/slider11.jpg'];


  @ViewChild("slides")
  slides!: QueryList<ElementRef>;
  selectImage(index: number) {
    console.log("Index: " + index);
    this.selectedindex = index;
    console.log("Selected Index: " + this.selectedindex);
  }

  showSlides() {
    let i;   
    this.slides.forEach(
      (slidesDiv: ElementRef) =>
        (slidesDiv.nativeElement.style.display = "none")
    );
    for( this.selectedindex=1; this.selectedindex<this.slides.length+1; this.selectedindex++){
    if (this.selectedindex > this.slides.length) { 
      this.selectedindex = 1
      this.slides.toArray()[this.selectedindex-1].nativeElement.style.display ="block";
     }
     this.slides.toArray()[this.selectedindex].nativeElement.style.display ="block";
    setTimeout(() => {
      this.showSlides();
    }, 2000); 
  }
  }


  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router) {
    this.role = 1;

  }

  ngOnInit() {
      this.showSlides();
  }

}
    
  
