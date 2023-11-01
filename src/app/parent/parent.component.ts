import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

parentData: any = {
  message: 'Hello from Parent!'
};


parentCount: number = 0;

onCountChange(newCount: number){
  this.parentCount = newCount;
}

}
