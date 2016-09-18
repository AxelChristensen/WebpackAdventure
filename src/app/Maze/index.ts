import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Maze } from './maze.component';
export * from './maze.component';
export * from './room-detail.component';
export * from './room-d.component';
export * from './movie-display.component';
console.log('`Maze` bundle loaded asynchronously');
// async components must be named routes for WebpackAsyncRoute
export const routes = [
  { path: '', component: Maze, pathMatch: 'full' }
];

@NgModule({
  declarations: [
    // Components / Directives/ Pipes
    Maze
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forChild(routes),
  ]
})
export default class AboutModule {
  static routes = routes;
}
