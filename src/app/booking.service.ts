import { Injectable } from '@angular/core';
import { BookedTicket } from './class';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor() { }
  bookedTikets: BookedTicket[] = [];

  lastBookedTiket!:BookedTicket;

}
