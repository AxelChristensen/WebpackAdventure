import {Room} from './room';
import {RoomService} from './room.service';
import {RandService} from './rand.service';
//import { Component } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { DataService } from './dataService';



@Component({
  selector: 'maze',
  template: `
 

  <h1> Maze... </h1>
     
     
    
   
    <room-display>AAA</room-display>
  
  `,
   styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .heroes {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .heroes li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .heroes li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .heroes li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .heroes .text {
      position: relative;
      top: -3px;
    }
    .heroes .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
  `],
  providers: [RoomService,RandService,DataService]
})

export class Maze implements OnInit {

  rooms : Room[];
  //rooms= ROOMS;
  roomers : Room[];
  selectedRoom: Room;
  whatRoom : Room;

  constructor(private roomService: RoomService,private randService: RandService,private dataService: DataService) {

  }
getHeroes(): void {
    this.roomService.getRooms().then(rooms => this.rooms = rooms);
  }
  ngOnInit(): void {
    this.getHeroes();
      this.randService.getRoom().then(whatRoom => this.whatRoom = whatRoom);

  }

  onSelect(room: Room): void {
    this.selectedRoom = room;
  }
}
