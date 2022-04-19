import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IData } from './models/data.model';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  isCube = false;
  subscription: Subscription = new Subscription();
  allData: IData[] = [];

  constructor(public dataService: DataService) {
    this.dataService.getFakeData();
    this.setData();
  }

  setData() {
    this.subscription.add(
      this.dataService.fakeData$.subscribe(data => this.allData = data)
    )
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    if(this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
  }
}
