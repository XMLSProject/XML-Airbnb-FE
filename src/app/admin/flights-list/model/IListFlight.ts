import { NumberSymbol, Time } from "@angular/common";

export interface IListFlight {
    id:number;
    takeoff_date:Date;
    takeoff_location:string;
    landing_location:string;
    price:number;
    available_seats:number;
    capacity:number;
}