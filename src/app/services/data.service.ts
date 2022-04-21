import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IData, THeaderData } from '../models/data.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  isCube = false;
  isCreateActive = false;
  isEditDelete = false;

  allData: IData[] = [];
  allData$ = new BehaviorSubject<IData[]>([]);

  itemData!: IData;
  itemData$ = new BehaviorSubject<IData>({ Color: 'red', Title: '', 'Create Date': '', 'Last Update': '', 'Created By': '' });

  headerTable: THeaderData[] = [ 'Color', 'Title', 'Create Date', 'Last Update', 'Created By' ];

  constructor() { }

  filterData(str: string) {
    let fData = [...this.allData];
    if (str && str.trim().length > 0) {
      fData = fData.filter((value: IData) => {
        return value.Title.toLowerCase().trim().includes(str.toLowerCase().trim(), 0);
      });
    }
    this.allData$.next(fData)
  }
}
