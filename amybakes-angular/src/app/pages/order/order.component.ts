import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const listHoursArray = document.body.querySelectorAll('.list-hours li');
    if (listHoursArray && listHoursArray.length > 0) {
      const currentDay = new Date().getDay();
      // Adjust for Sunday being 0 and our list starting with Sunday
      listHoursArray[currentDay].classList.add(('today'));
    }
  }
}
