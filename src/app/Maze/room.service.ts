import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Configuration } from './maze.constants';
import 'rxjs/Rx';
import {Room} from "./room";
import {ROOMS} from "./mock-rooms";
@Injectable()
export class RoomService {
  constructor(private _http: Http, private _configuration: Configuration) {

    this.actionUrl = _configuration.ServerWithApiUrl;
    this.roomUrl = _configuration.ServerWithRoomUrl;
    this.pickupUrl = _configuration.ServerWithPickupUrl;

    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Accept', 'application/json');

  }

  getRooms(): Promise<Room[]>{
  return Promise.resolve(ROOMS);
}

getRoomsSlowly(): Promise<Room[]> {
  return new Promise<Room[]>(resolve =>
  setTimeout(resolve,2000)).then(()=>this.getRooms());

}
  public GetRoom = (search: string): Observable<any> => {
    return this._http.get(this.roomUrl  + search).map(res => res.json());
  }
  public pickUpItem=(roomnum: string,itemdesc: string): Observable<any> => {
   // window.alert("hey "+roomnum + " " + itemdesc + "***");
    return this._http.get(this.pickupUrl  + roomnum + itemdesc).map(res => res.json());
  }
}
