import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable, of } from "rxjs";

@Injectable()
export class FetchResolveService implements Resolve<any> {
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        return of([{
            id: 1,
            name: 'Abhisek'
        },{
            id: 2,
            name: 'Bikram'
        },{
            id: 3,
            name: 'Naresh'
        }]);
    }
}