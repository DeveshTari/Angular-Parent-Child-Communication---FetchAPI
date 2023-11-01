import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit{

  data: any;

  constructor(private dataService: DataService){}


  ngOnInit(){
    this.dataService.getApiData().subscribe((result) => {
      this.data = result.items;
      console.log(result.items);
      
    })
  }


  

}
