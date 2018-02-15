import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class DetailsService {

    constructor(private http: Http) {}
    storeDetails(details: any[]){
            return this.http.post('', details);
    }
    getDetails() {
        const headers =  new Headers({'Content-Type': 'application/json'})
        return this.http.get('http://localhost:3000/todos',{headers: headers});
    }

}