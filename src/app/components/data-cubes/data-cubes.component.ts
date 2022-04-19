import { Component, Input, OnInit } from '@angular/core';
import { IData } from 'src/app/models/data.model';

@Component({
  selector: 'app-data-cubes',
  templateUrl: './data-cubes.component.html',
  styleUrls: ['./data-cubes.component.scss']
})
export class DataCubesComponent implements OnInit {
  @Input() data: IData[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
