//import {bootstrap, Component, CORE_DIRECTIVES} from 'angular2/angular2'
import { Component, OnInit } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { DataService } from './dataService';
import { NameService } from './nameService';
import {RoomService} from "./room.service";
@Component({
    selector: 'room-display',
    directives: [CORE_DIRECTIVES],
    providers: [DataService,NameService,RoomService],
     template: `
<span>{{received.title}}:   {{received.description}}</span>
   
    
     <ul class="heroes">
      <li *ngFor="#name of received.connectingroomsstubs"
        [class.selected]="room === selectedRoom"
        (click)="onSelect(name.roomnum)">
        <span class="badge">{{name.roomnum}}</span> {{name.description}}
      </li>
    </ul>
    <ul class="states">
      <li *ngFor="#name of received.stateroomsstubs"
        (click)="onPick(name)">
        <span class="badge">{{name.operation}}</span> {{name.description}}
      </li>
    </ul>
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
      width: 150em;
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
    


    .states {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 150em;
    }
    .states li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #b3c6ff;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 10px;
    }
    .states li.selected:hover {
      background-color: #b3c6ff !important;
      color: white;
    }
    .states li:hover {
      color: #607D8B;
      background-color: #b3c6ff;
      left: .1em;
    }
    .states .text {
      position: relative;
      top: -3px;
    }
    .states .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #b3c6ff;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 14px 0 0 4px;
    }
  `]
})

export class RoomDisplayComponent implements OnInit {

    public received: string = "";

  name: string;
  names: Array<string>;
  constructor(private nameService:NameService,private roomService:RoomService) {

  }
    // constructor(private _dataService: DataService) {
    // }

    ngOnInit() {



             this.nameService
            .GetRoom('5')
            .subscribe((item: any) => {
                this.received = item;
            }, error => console.log(error));
    }
onSelect(room: String): void {
    //this.selectedRoom = room;
    //window.alert("hey "+room);
    this.roomService
          .GetRoom(""+room)
          .subscribe((item: any) => {
              this.received = item;
          }, error => console.log(error));
 // this.roomService.getRooms().then(rooms => this.rooms = rooms);
  }
  onPick(object: String): void {
    //this.selectedRoom = room;

    this.roomService
            .pickUpItem("/"+object.description,"/"+ object.roomnum)
            .subscribe((item: any) => {
                this.received = item;

            }, error => console.log(error));

  }
}
