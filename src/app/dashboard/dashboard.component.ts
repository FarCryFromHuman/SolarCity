import { Component, OnInit } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../store/store.state';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private store: NgRedux<IAppState>) { }

  ngOnInit() {
  }

}
