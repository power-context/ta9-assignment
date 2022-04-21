import { Component, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { IData, THeaderData } from 'src/app/models/data.model';
import { CrudService } from 'src/app/services/CRUD.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnDestroy{
  @Input() data: IData[] = [];
  @Input() headers!: THeaderData[];
  subscription: Subscription = new Subscription();

  isReverseSorting = false;

  constructor(private crudService: CrudService, private dataService: DataService) { }

  sortTableBy(sort: Partial<THeaderData>) {
    if (this.isReverseSorting) {
      this.data.sort((a: IData, b: IData) => (b[sort] > a[sort]) ? 1 : ((b[sort] < a[sort]) ? -1 : 0))
    } else {
      this.data.sort((a: IData, b: IData) => (a[sort] > b[sort]) ? 1 : ((a[sort] < b[sort]) ? -1 : 0))
    }
    this.isReverseSorting = !this.isReverseSorting;
  }

  editItem(id = '') {
    this.dataService.isCreateActive = true;
    this.dataService.isEditDelete = true;

    this.subscription.add(
      this.crudService.getItem(id)
        .subscribe((item: IData) => {
          this.dataService.itemData = {
            id,
            ...item
          }

          this.dataService.itemData$.next(this.dataService.itemData);
        })
    )
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
