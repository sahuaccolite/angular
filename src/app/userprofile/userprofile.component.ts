import { Component, OnInit, Output ,EventEmitter} from '@angular/core';
import { IUserData } from '../header/interface/user.interface';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.scss']
})
export class UserprofileComponent implements OnInit {
  @Output() userName:EventEmitter<IUserData> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  userData : IUserData= {
    name: 'No Name',
    dob: "19/01/2020",
    city: "UK"
  }

  passValueToparent(){
    this.userName.emit(this.userData);
  }

}
