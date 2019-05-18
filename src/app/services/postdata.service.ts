import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class PostDataService {
    private apiURL: string = `//jsonplaceholder.typicode.com/posts`;

    constructor(private _http: HttpClient) { }
    saveData(data: any): Observable<any> {
        const options = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        }
        return this._http.post(this.apiURL, data).pipe(
            map(response => response),
            catchError(error => of(error))
        );

    }
}