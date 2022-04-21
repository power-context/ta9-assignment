import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CrudService } from './services/CRUD.service';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  isCube = false;
  subscription: Subscription = new Subscription();


  constructor(public dataService: DataService, public crudService: CrudService) {
    this.getAllData();
  }

  getAllData() {
    this.subscription.add(this.crudService.fetchAllData().subscribe(res => {
      this.dataService.allData = res;
      this.dataService.allData$.next(this.dataService.allData)
    }));
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    if(this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
