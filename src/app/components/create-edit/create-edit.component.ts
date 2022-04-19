import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-create-edit',
  templateUrl: './create-edit.component.html',
  styleUrls: ['./create-edit.component.scss']
})
export class CreateEditComponent implements OnInit {
  color = 'red';

  constructor(public dataService: DataService) { }

  closeCreation() {
    this.dataService.isCreateActive = false;
  }


  ngOnInit(): void {
  }

}
