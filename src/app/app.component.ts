import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IData } from './models/data.model';
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
  allData: IData[] = [];

  // Example 1
  exampleData1: IData[] = [];

  constructor(public dataService: DataService, public crudService: CrudService) {
    this.dataService.getFakeData();
    this.setData();
    this.getAllData();
  }

  getAllData() {
    this.crudService.getAllData().subscribe(res => {
      console.log('r', res.map(m => {
        return {
          id: m.payload.doc.id,
          ...m.payload.doc.data() as object

        }
      }));
    })
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
