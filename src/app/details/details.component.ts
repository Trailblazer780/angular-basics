import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  visible = false;
  logs = [];
  
  
  constructor() { }
  
  onToggleDisplay() {
    this.visible = !this.visible;
    this.logs.push(this.logs.length + 1);
    
  }
  
  visible2 = false;
  logs2 = [];
  onToggleDisplayTimestamp() {
    this.visible2 = !this.visible2;
    this.logs2.push(new Date);

  }

  ngOnInit(): void {
  }

}
