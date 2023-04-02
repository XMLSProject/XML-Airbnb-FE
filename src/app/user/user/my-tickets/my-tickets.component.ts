import { Component, OnInit } from '@angular/core';
import { Ticket } from '../model/ticket';
import { MatTableDataSource } from '@angular/material/table';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-my-tickets',
  templateUrl: './my-tickets.component.html',
  styleUrls: ['./my-tickets.component.css']
})
export class MyTicketsComponent implements OnInit {

  displayedColumns: string[] = ['takeoff_date', 'takeoff_time', 'takeoff_location', 'landing_location', 'capacity', 'price', 'amount', 'total_price']

  public dataSource = new MatTableDataSource<Ticket>();
  public tickets: Ticket[] = [];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.showAllTickets();
  }


  public showAllTickets(): void {
    this.userService.getUserTickets().subscribe(res => {
      this.tickets = res;
      this.dataSource.data = this.tickets
      console.log(this.tickets)
    })
  }

}
