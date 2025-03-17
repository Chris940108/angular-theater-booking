import { Component } from '@angular/core';
import { TheatersService } from '../theaters.service';
import { BookingService } from '../booking.service';
import { Movies, ShowTimes, Theaters } from '../description';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BookedTicket } from '../class';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking',
  standalone: false,
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent {

  data!: Movies;
  showTimes: ShowTimes[] = [];
  selectedTheater?: Theaters;
  selectedShowTime?: ShowTimes;
  seatsAvailable!: number;
  childtSeats!: number;
  ticketForm!: FormGroup;
  bookedTicket: BookedTicket = new BookedTicket;


  constructor(
    private theatersService: TheatersService,
    private booketService: BookingService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.getTheater();
    this.initTicketForm();
  }

  getTheater(){
    this.theatersService.selectedMovie$.subscribe(movie => {
      if (movie) {
        this.data = movie;
      } else {
        this.data = this.theatersService.getMovies()[0];
      }
    });
  }

  initTicketForm(){
    this.ticketForm = new FormGroup({
      'theater': new FormControl(null, Validators.required),
      'showTime': new FormControl(null, Validators.required),
      'adultSeats': new FormControl(1, Validators.required),
      'childSeats': new FormControl(0, Validators.required),
      'lastName': new FormControl(null, Validators.required),
      'firstName': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email])
    })
  }

  onTheaterChange(selectedTheaterName: string): void {
    this.selectedTheater = this.data.theaters.find(theater => theater.name === selectedTheaterName);
    this.showTimes = this.selectedTheater ? this.selectedTheater.showTimes : [];
    this.ticketForm.patchValue({ showTime: '' });
  }

  onShowTimeChange(formShowTime: String): void {

    this.selectedShowTime = this.showTimes.find(showTime => showTime.time === formShowTime);
    if (this.selectedShowTime) {
      this.seatsAvailable = this.selectedShowTime.seatsAvailable;
      this.childtSeats = this.seatsAvailable - 1;
    }
  }

  numberOfSeats(): number[] {
    return Array.from({ length: this.seatsAvailable }, (_, i) => i + 1);
  }

  adultSeatsSelected(adultSeats: number) {
    this.childtSeats = this.seatsAvailable - adultSeats;
  }

  numberOfChildSeats(): number[] {
    return Array.from({ length: this.childtSeats + 1 }, (_, i) => i);
  }

  onSubmit(): void {
    if (this.ticketForm.valid) {

      this.router.navigate(['/confirmation']);
      this.bookedTicket.theater = this.ticketForm.value.theater,
      this.bookedTicket.showTime = this.ticketForm.value.showTime,
      this.bookedTicket.adultSeats = this.ticketForm.value.adultSeats,
      this.bookedTicket.childSeats = this.ticketForm.value.childSeats,
      this.bookedTicket.lastName = this.ticketForm.value.lastName,
      this.bookedTicket.firstName = this.ticketForm.value.firstName,
      this.bookedTicket.email = this.ticketForm.value.email,
      this.bookedTicket.title = this.data.title
        }
      this.booketService.bookedTikets.push(this.bookedTicket);
      this.booketService.lastBookedTiket = this.bookedTicket;
    }
    
}
    



