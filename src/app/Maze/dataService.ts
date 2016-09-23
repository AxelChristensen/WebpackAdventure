import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Configuration } from './maze.constants';
import 'rxjs/Rx';

@Injectable()
export class DataService {

    private actionUrl: string;
    private headers: Headers;
    private roomUrl: string;
    
    constructor(private _http: Http, private _configuration: Configuration) {

        this.actionUrl = _configuration.ServerWithApiUrl;
        this.roomUrl = _configuration.ServerWithRoomUrl;
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
    }
    public getRoom = (search: string): Observable<any> => {
        return this._http.get(this.roomUrl + search).map(res => res.json());
    }
    public GetAll = (): Observable<any> => {
        return this._http.get(this.actionUrl).map((response: Response) => <any>response.json());
    }

    public GetSingle = (search: string): Observable<any> => {
        return this._http.get(this.actionUrl + 't=' + search).map(res => res.json());
    }

    public Add = (itemName: string): Observable<any> => {
        var toAdd = JSON.stringify({ ItemName: itemName });

        return this._http.post(this.actionUrl, toAdd, { headers: this.headers }).map(res => res.json());
    }

    public Update = (id: number, itemToUpdate: any): Observable<any> => {
        return this._http
            .put(this.actionUrl + id, JSON.stringify(itemToUpdate), { headers: this.headers })
            .map(res => res.json());
    }

    public Delete = (id: number): Observable<any> => {
        return this._http.delete(this.actionUrl + id);
    }
}