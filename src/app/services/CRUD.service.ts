import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map, Observable } from 'rxjs';
import { IData, THeaderData } from '../models/data.model';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  isCube = false;
  isCreateActive = false;

  headerTable: THeaderData[] = [ 'Color', 'Title', 'Create Date', 'Last Update', 'Created By' ];

  constructor(public angularFire: AngularFirestore) { }

  fetchAllData(): Observable<IData[]> {
    return this.angularFire
      .collection('data')
      .snapshotChanges()
      .pipe(map(item => {
        return item.map(m => {
          return {
            id: m.payload.doc.id,
            ...m.payload.doc.data() as object
          } as IData
        })
      }))
  }

  getItem(id: string): Observable<IData> {
    return this.angularFire
      .collection('data')
      .doc(id)
      .valueChanges() as Observable<IData>;
  }

  addItem(item: IData): Promise<any> {
    return this.angularFire.collection('data')
    .add(item);
  }

  deleteItem(id: string): Promise<void> {
    return this.angularFire
      .collection('data')
      .doc(id)
      .delete();
  }

  updateItem(item: IData, id: string): Promise<void> {
    return this.angularFire
      .collection('data')
      .doc(id)
      .set(item);
  }
}
