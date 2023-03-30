import { NumberSymbol, Time } from "@angular/common";

export interface IListFlight {
    id:number;
    date:Date;
    takingOff:string;
    landing:string;
    prize:number;
    seats:number;
    freeSeats:number;
}