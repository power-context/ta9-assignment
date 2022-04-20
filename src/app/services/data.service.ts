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
    { id: '', Color: 'red',     Title: 'Car', 'Create Date': '27/02/2022', 'Last Update': '27/03/2022', 'Created By': 'John' },
    { id: '',Color: '#59E097', Title: 'Terrorist', "Create Date": '27/02/2022', "Last Update": '27/03/2022', "Created By": 'Ran Shim' },
    { id: '',Color: '#AD0000', Title: 'Murder', "Create Date": '27/02/2022', "Last Update": '27/03/2022', "Created By": 'Or Ban' }
  ];

  fakeData$ = new BehaviorSubject<IData[]>([]);

  constructor() { }

  filterData(str: string) {
    if (str && str.trim().length > 0) {
      let fData: IData[] = [ ...this.fakeData ];
      fData = this.fakeData.filter((value: IData) => {
        return value.Title.toLowerCase().trim().includes(str.toLowerCase().trim(), 0);
      });
      this.fakeData$.next(fData);
      return;
    }
    this.fakeData$.next(this.fakeData);
  }

  getFakeData() {
    this.fakeData$.next(this.fakeData);
  }

}
