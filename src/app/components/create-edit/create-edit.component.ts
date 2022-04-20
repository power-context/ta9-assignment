import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IData } from 'src/app/models/data.model';
import { CrudService } from 'src/app/services/CRUD.service';
import { DataService } from 'src/app/services/data.service';

type TFormModel = { [key in keyof IData]: FormControl }

@Component({
  selector: 'app-create-edit',
  templateUrl: './create-edit.component.html',
  styleUrls: ['./create-edit.component.scss']
})

// Color: string;
// Title: string;
// ['Create Date']: string;
// ['Last Update']: string;
// ['Created By']: string;

export class CreateEditComponent implements OnInit {
  color = 'red';
  form = new FormGroup({
    Title: new FormControl('', [Validators.required]),
    Color: new FormControl('', [Validators.required]),
    "Created By": new FormControl('', [Validators.required]),
  } as TFormModel);

  constructor(public dataService: DataService, private crudService: CrudService) { }

  closeCreation() {
    this.dataService.isCreateActive = false;
  }

  fc(controlName: keyof IData) {
    return this.form.controls[controlName as string] as FormControl;
  }

  fce(controlName: keyof IData, errorName: string) {
    return this.fc(controlName).hasError(errorName);
  }

  dateHandler(): string {
    const cd = new Date();
    const day = cd.getDay() < 10 ? '0' + cd.getDay() : cd.getDay();
    const month = cd.getMonth() < 10 ? '0' + cd.getMonth() : cd.getMonth();
    return `${day}/${month}/${cd.getFullYear()}`
  }

  submit() {
    const newItem: IData = {
      id: '',
      Color: this.fc('Color').value,
      Title: this.fc('Title').value,
      "Created By": this.fc('Created By').value,
      'Create Date': this.dateHandler(),
      'Last Update': this.dateHandler(),
    };

    this.crudService.addItem(newItem)
      .then(r => console.log('result', r))
      .catch(error => console.log('Error:' + error))
      .finally(() => console.log('Final'))

    this.dataService.fakeData.push(newItem);
    this.dataService.getFakeData();

    this.closeCreation();
  }



  ngOnInit(): void {
  }

}
