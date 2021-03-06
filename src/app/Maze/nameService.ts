import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Configuration } from './maze.constants';
import 'rxjs/Rx';

@Injectable()
export class NameService {
    names: Array<string>;

 private actionUrl: string;
 private roomUrl: string;
    private headers: Headers;
    
    constructor(private _http: Http, private _configuration: Configuration) {

        this.actionUrl = _configuration.ServerWithApiUrl;
        this.roomUrl = _configuration.ServerWithRoomUrl;

        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
         this.names = ["Alice", "Aarav", "Martín", "Shannon", "Ariana", "Kai"];
    }


    
   
    public GetSingle = (search: string): Observable<any> => {
        return this._http.get(this.actionUrl + 't=' + search).map(res => res.json());
    }
    public GetRoom = (search: string): Observable<any> => {
        return this._http.get(this.roomUrl  + search).map(res => res.json());
    }
}