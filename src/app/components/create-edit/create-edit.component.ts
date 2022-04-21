import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { IData } from 'src/app/models/data.model';
import { CrudService } from 'src/app/services/CRUD.service';
import { DataService } from 'src/app/services/data.service';

type TFormModel = { [key in keyof IData]: FormControl }

@Component({
  selector: 'app-create-edit',
  templateUrl: './create-edit.component.html',
  styleUrls: ['./create-edit.component.scss']
})

export class CreateEditComponent implements OnInit, OnDestroy{
  color = 'red';
  item!: IData;
  subscription: Subscription = new Subscription();

  form = new FormGroup({
    Title: new FormControl('', [Validators.required]),
    Color: new FormControl('', [Validators.required]),
    'Created By': new FormControl('', [Validators.required]),
  } as TFormModel);

  constructor(public dataService: DataService, private crudService: CrudService) {
  }

  ngOnInit(): void {
    console.log('date', new Date().toISOString());
    this.setItem();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  setItem() {
    this.subscription.add(
      this.dataService.itemData$.subscribe(res => {
        if (res && this.dataService.isEditDelete) {
          this.item = res;
          this.form.setValue({
            Title: this.item.Title,
            Color: this.item.Color,
            'Created By': this.item['Created By']
          });
        }
      })
    )
  }

  closeCreation() {
    this.form.reset();
    this.dataService.isCreateActive = false;
  }

  fc(controlName: keyof IData) {
    return this.form.controls[controlName as string] as FormControl;
  }

  fce(controlName: keyof IData, errorName: string) {
    return this.fc(controlName).hasError(errorName);
  }

  dateToISOString(): string {
    const cd = new Date();
    return cd.toISOString();
  }

  deleteItem() {
    this.crudService.deleteItem(this.item?.id || '')
    .then(_ => console.log('Deleted!'))
    .catch(error => console.log('Error: ', error))

    this.closeCreation();
  }

  submit() {
    const itemId = this.item?.id || '';

    const newItem: IData = {
      Color: this.fc('Color').value,
      Title: this.fc('Title').value,
      "Created By":  this.fc('Created By').value,
      'Create Date': this.dataService.isEditDelete ? this.item['Create Date'] : this.dateToISOString(),
      'Last Update': this.dateToISOString()
    };

    this.item = { ...newItem };

    if (this.form.invalid) {
      return;
    }

    this.closeCreation();

    if (this.dataService.isEditDelete) {
      this.crudService.updateItem(this.item, itemId)
        .then(_ => console.log('Updated!'))
        .catch(error => console.log('Error:' + error))
        .finally(() => this.dataService.isEditDelete = false)
    } else {
      this.crudService.addItem(this.item)
        .then(_ => console.log('Added!'))
        .catch(error => console.log('Error:' + error))
        .finally(() => this.dataService.isEditDelete = false)
    }
  }

}
