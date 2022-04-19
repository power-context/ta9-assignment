import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataCubesComponent } from './data-cubes.component';

describe('DataCubesComponent', () => {
  let component: DataCubesComponent;
  let fixture: ComponentFixture<DataCubesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataCubesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataCubesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
