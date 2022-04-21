import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-find-tool',
  templateUrl: './find-tool.component.html',
  styleUrls: ['./find-tool.component.scss']
})
export class FindToolComponent implements OnInit {
  constructor(public dataService: DataService) { }

  ngOnInit(): void {
  }

  filterData(event: any) {
    this.dataService.filterData(event.target.value + '');
  }

}
