export class Flight {
    id : string = '';
    date : string = '';
    time : string = '';
    takingOff : string = '';
    landing : string = '';
    price : number = 0;
    seats : number = 0;
    freeSeats : number = 0;

    public constructor(obj?: any) {
        if (obj) {
            this.id = obj.id;
            this.date = obj.date; 
            this.time = obj.time;
            this.takingOff = obj.takingOff;
            this.landing = obj.landing;
            this.price = obj.price;
            this.seats = obj.seats;
            this.freeSeats = obj.freeSeats;
        }
    }

}