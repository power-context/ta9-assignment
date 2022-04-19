import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindToolComponent } from './find-tool.component';

describe('FindToolComponent', () => {
  let component: FindToolComponent;
  let fixture: ComponentFixture<FindToolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindToolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
