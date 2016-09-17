import {Injectable} from '@angular/core';

import {Room} from './room';
import {ROOMS} from './mock-rooms';

@Injectable()
export class RoomService {


  getRooms(): Promise<Room[]>{
  return Promise.resolve(ROOMS);
}

getRoomsSlowly(): Promise<Room[]> {
  return new Promise<Room[]>(resolve =>
  setTimeout(resolve,2000)).then(()=>this.getRooms());
  
}
}