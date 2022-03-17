import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnChanges , OnInit, OnDestroy {
  @Input() title = "";
  userName = "Test name ";
  user = new Array(100); 
  constructor() { console.log("constructor in header comp..") }
  
  /* Only once when you comp get init */
  ngOnInit(): void {
      //sub  --->[1,2]--->[3,4]
  }
  ngOnChanges(changes: SimpleChanges): void {
  }
  
  ngOnDestroy(): void {
    this.user =[];  
    console.log("I have destroyed... unsub all un");

  }






}
