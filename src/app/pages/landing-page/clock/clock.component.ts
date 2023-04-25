import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {

  private daysArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  private monthsArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  private data = new Date();
  public hour: any;
  public minute: string = ''; // this is the minute
  public second: string = ''; // this is the second
  public ampm: string = ''; // AM or PM
  public day: string = ''; // day of the week

  constructor() {
  }

  ngOnInit(): void {
    setInterval(() => {
      const data = new Date();
      this.updateData(data);
    }, 1000); //this will call the updateData method in each second.
    this.day = this.daysArray[this.data.getDay()];

  }

  private updateData(data: Date) {
    const hour = data.getHours();
    this.ampm = hour >= 12 ? 'PM' : 'AM';

    this.hour = hour % 12;
    this.hour = this.hour ? this.hour : 12; // the hour '0' should be '12'

    this.hour = this.hour < 10 ? '0' + this.hour : this.hour; // if the hours is less than 10 then add 0 before the number
    const minute = data.getMinutes();
    this.minute = minute < 10 ? '0' + data.getMinutes().toString() : data.getMinutes().toString();
    const second = data.getSeconds();
    this.second = second < 10 ? '0' + data.getSeconds().toString() : data.getSeconds().toString();
  }


}
