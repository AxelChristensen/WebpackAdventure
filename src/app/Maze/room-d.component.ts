import { Component, Input } from '@angular/core';
import { Room } from './room';

@Component({
  selector: 'my-room-d',
  template: `
  WOW
    <div *ngIf="room">
      <h2>{{room.name}} details!WOW</h2>
      <div>
        <label>id: </label>{{room.id}}
      </div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="room.name" placeholder="name"/>
      </div>
    </div>
  `
})
export class RoomDComponent {
  @Input() room: Room;
}