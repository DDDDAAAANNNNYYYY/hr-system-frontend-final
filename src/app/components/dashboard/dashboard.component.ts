import { Component, OnInit } from '@angular/core';
import { UserMockData } from 'src/app/MockData/UserMockData';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  fullname:string;
  constructor(private usermock : UserMockData) { }

  ngOnInit(): void {
    this.fullname = localStorage.getItem("currentUsername");
  }

}
