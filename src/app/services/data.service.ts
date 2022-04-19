import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IData, THeaderData } from '../models/data.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  isCube = false;
  isCreateActive = false;

  headerTable: THeaderData[] = [ 'Color', 'Title', 'Create Date', 'Last Update', 'Created By' ];

  fakeData: IData[] = [
    { Color: 'red',     Title: 'Car', 'Create Date': '27/02/2022', 'Last Update': '27/03/2022', 'Created By': 'John' },
    { Color: '#59E097', Title: 'Terrorist', "Create Date": '27/02/2022', "Last Update": '27/03/2022', "Created By": 'Ran Shim' },
    { Color: '#AD0000', Title: 'Murder', "Create Date": '27/02/2022', "Last Update": '27/03/2022', "Created By": 'Or Ban' }
  ];

  fakeData$ = new BehaviorSubject<IData[]>([]);

  getFakeData() {
    this.fakeData$.next(this.fakeData);
  }

  constructor() { }
}
