import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookedTicket } from '../class';
import { BookingService } from '../booking.service';


@Component({
  selector: 'app-confirmation',
  standalone: false,

  templateUrl: './confirmation.component.html',
  styleUrl: './confirmation.component.css'
})
export class ConfirmationComponent {

  ticketInfo!: BookedTicket;
  
  


  constructor(private bookedService: BookingService) { }

  ngOnInit(): void {

    this.ticketInfo = this.bookedService.lastBookedTiket;
  } 

  


}
