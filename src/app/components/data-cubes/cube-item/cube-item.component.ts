import { Component, Input, OnInit } from '@angular/core';
import { IData } from 'src/app/models/data.model';

@Component({
  selector: 'app-cube-item',
  templateUrl: './cube-item.component.html',
  styleUrls: ['./cube-item.component.scss']
})
export class CubeItemComponent implements OnInit {
  @Input() dataItem!: IData;

  constructor() { }

  ngOnInit(): void {
  }

}
