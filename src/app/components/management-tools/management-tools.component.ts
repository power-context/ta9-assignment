import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-management-tools',
  templateUrl: './management-tools.component.html',
  styleUrls: ['./management-tools.component.scss']
})
export class ManagementToolsComponent implements OnInit {

  constructor(public dataService: DataService) { }

  createItem() {
    this.dataService.isCreateActive = true;
  }

  changeTableView(type: boolean) {
    if (type) {
      this.dataService.isCube = false;
      return;
    }
    this.dataService.isCube = true;
  }

  ngOnInit(): void {
  }

}
