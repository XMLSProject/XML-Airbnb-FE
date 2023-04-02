import { Flight } from "src/app/admin/flights-list/model/FlightModel";
import { User } from "src/app/shared/model/user";

export interface Ticket {
    user: User
    flight: Flight
    amount: number
}
