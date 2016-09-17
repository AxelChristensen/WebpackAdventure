import { Component, Input } from '@angular/core';
import { Room } from './room';

@Component({
  selector: 'my-room-detail',
  template: `
    <div *ngIf="room">
      <h2>{{room.name}} details!</h2>
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
export class RoomDetailComponent {
  @Input() room: Room;
}
