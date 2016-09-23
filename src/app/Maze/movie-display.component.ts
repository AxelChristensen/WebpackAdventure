//import {bootstrap, Component, CORE_DIRECTIVES} from 'angular2/angular2'
import { Component, OnInit } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { DataService } from './dataService';
import { NameService } from './nameService';
@Component({
    selector: 'movie-display',
    directives: [CORE_DIRECTIVES],
    providers: [DataService,NameService],
     template: `
 

<h2>{{title}}</h2>
<span>{{received.description}}</span>
   
    <ul>
      <li *ngFor="#name of received.connectingrooms">{{name}}</li>
    </ul>
     <ul class="heroes">
      <li *ngFor="#name of received.connectingrooms"
        [class.selected]="room === selectedRoom"
        (click)="onSelect(name)">
        <span class="badge">{{name}}</span> {{name}}
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
  `]
})

export class MovieDisplayComponent implements OnInit {

    public received: string = "";
 title = "Angular 2 - using a service  ";
  name: string;
  names: Array<string>;
  constructor(private nameService:NameService) {
    this.name = 'Michal';
    this.names = nameService.getNames();
  }
    // constructor(private _dataService: DataService) {
    // }

    ngOnInit() {

        // this.nameService
        //     .GetSingle('Rushmore')
        //     .subscribe((item: any) => {
        //         this.received = item;
        //     }, error => console.log(error));

             this.nameService
            .GetRoom('5')
            .subscribe((item: any) => {
                this.received = item;
            }, error => console.log(error));
    }
onSelect(room: String): void {
    //this.selectedRoom = room;
    //window.alert("hey "+room);
    this.nameService
            .GetRoom(""+room)
            .subscribe((item: any) => {
                this.received = item;
            }, error => console.log(error));
  }
}
