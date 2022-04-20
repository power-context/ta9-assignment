import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/compat/database';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { IData, THeaderData } from '../models/data.model';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  isCube = false;
  isCreateActive = false;

  allData!: AngularFireList<IData>;
  dataItem!: AngularFireObject<IData>;

  headerTable: Partial<THeaderData[]> = [ 'Color', 'Title', 'Create Date', 'Last Update', 'Created By' ];

  fakeData: IData[] = [
    { id: '', Color: 'red',     Title: 'Car', 'Create Date': '27/02/2022', 'Last Update': '27/03/2022', 'Created By': 'John' },
    { id: '', Color: '#59E097', Title: 'Terrorist', "Create Date": '27/02/2022', "Last Update": '27/03/2022', "Created By": 'Ran Shim' },
    { id: '', Color: '#AD0000', Title: 'Murder', "Create Date": '27/02/2022', "Last Update": '27/03/2022', "Created By": 'Or Ban' }
  ];

  fakeData$ = new BehaviorSubject<IData[]>([]);

  constructor(public angularFire: AngularFirestore, private db: AngularFireDatabase) { }

  getAllData() {
    return this.angularFire
      .collection('data')
      .snapshotChanges()
      // .pipe(map(item => {
      //   return item.map(doc => {
      //     return {
      //       id: doc.payload.doc.id,
      //       ...doc.payload.doc.data()
      //     }
      //   })
      // }))
  }

  getItem(id: string) {
    return this.angularFire
      .collection('data')
      .doc(id)
      .valueChanges();
  }

  addItem(item: IData) {
    return this.angularFire.collection('data')
    .add(item);
  }

  deleteItem(id: string) {
    return this.angularFire
      .collection('data')
      .doc(id)
      .delete();
  }

  updateItem(item: IData, id: string) {
    return this.angularFire
      .collection('data')
      .doc(id)
      .update(item)
  }






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
