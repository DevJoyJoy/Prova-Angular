import { Component, EventEmitter, NgModule } from '@angular/core';

@Component({
  selector: 'app-input',
  imports: [],
  templateUrl: './input.html',
  styleUrl: './input.css',
})
export class Input {
  @NgModule()
  label: string = "";
  Change: EventEmitter<any> = new EventEmitter();

  changed = (event: any) => {
    this.label = event.target.value;
    this.Change.emit(event);
  }
}
