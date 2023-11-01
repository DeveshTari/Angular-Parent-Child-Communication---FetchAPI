import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {

@Input() count!: number;
@Output() countChange = new EventEmitter<number>();

increment(){
  this.count++;
  this.countChange.emit(this.count);
}

decrement(){
  this.count--;
  this.countChange.emit(this.count);
}





}
