import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-home',
  templateUrl: './users-home.component.html',
  styleUrls: ['./users-home.component.css']
})
export class UsersHomeComponent implements OnInit {
   open: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  onClick(){
      this.open= !this.open;
  }
}
