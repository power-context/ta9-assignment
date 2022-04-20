import { Component, Input } from '@angular/core';
import { IData, THeaderData } from 'src/app/models/data.model';


@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent {
  @Input() data: IData[] = [];
  @Input() headers!: THeaderData[];
  isReverseSorting = false;

  constructor() { }

  sortTableBy(sort: Partial<THeaderData>) {
    if (this.isReverseSorting) {
      this.data.sort((a: IData, b: IData) => (b[sort] > a[sort]) ? 1 : ((b[sort] < a[sort]) ? -1 : 0))
    } else {
      this.data.sort((a: IData, b: IData) => (a[sort] > b[sort]) ? 1 : ((a[sort] < b[sort]) ? -1 : 0))
    }
    this.isReverseSorting = !this.isReverseSorting;
  }

}
