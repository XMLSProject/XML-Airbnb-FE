import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";




@Injectable
(
    {
        providedIn: 'root'
    }
)
export class AuthGuard implements CanActivate{
    constructor(private router: Router){
        

    }
    canActivate()
    {
      
        if(localStorage.getItem('role') == "Admin")
            return true;
        else
            this.router.navigate(['/login']);
            return false;
    }
    
}

function jwt_decode(token: string): any {
    throw new Error("Function not implemented.");
}
