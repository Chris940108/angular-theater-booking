import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookingService } from '../booking.service';
import { BookedTicket } from '../class';

@Component({
  selector: 'app-my-booking',
  standalone: false,
  
  templateUrl: './my-booking.component.html',
  styleUrl: './my-booking.component.css'
})


export class MyBookingComponent {
  
  myBookings!: BookedTicket[];
  

  constructor(private bookingService: BookingService) { }

  ngOnInit(): void {
    this.myBookings = this.bookingService.bookedTikets
  }
}
