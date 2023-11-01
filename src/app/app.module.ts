import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import {HttpClientModule} from '@angular/common/http';
import { DataTableComponent } from './data-table/data-table.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { CounterComponent } from './counter/counter.component';



@NgModule({
  declarations: [
    AppComponent,
    DataTableComponent,
    ChildComponent,
    ParentComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
