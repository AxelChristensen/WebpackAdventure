import {Injectable} from '@angular/core';

import {Room} from './room';
import {ROOMS} from './mock-rooms';

@Injectable()
export class RandService {


  getRooms(): Promise<Room[]>{
  return Promise.resolve(ROOMS);
}

getRoom(): Promise<Room> {
  return Promise.resolve(ROOMS[1]);
}
}