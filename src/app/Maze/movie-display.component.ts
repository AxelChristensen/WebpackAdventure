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
  <h1>Hello World...FROM MOVIE DISPLAY yeah...</h1>

<h2>{{title}}</h2>
<span>{{received | json}}</span>
    <ul>
      <li *ngFor="#name of names">{{name}}</li>
    </ul>
  `,
})

export class MovieDisplayComponent implements OnInit {

    public received: string = "";
 title = "Angular 2 - using a service";
  name: string;
  names: Array<string>;
  constructor(private nameService:NameService) {
    this.name = 'Michal';
    this.names = nameService.getNames();
  }
    // constructor(private _dataService: DataService) {
    // }

    ngOnInit() {

        this.nameService
            .GetSingle('Rushmore')
            .subscribe((item: any) => {
                this.received = item;
            }, error => console.log(error));
    }

}
