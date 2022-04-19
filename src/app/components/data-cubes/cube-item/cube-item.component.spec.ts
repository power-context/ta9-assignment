import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CubeItemComponent } from './cube-item.component';

describe('CubeItemComponent', () => {
  let component: CubeItemComponent;
  let fixture: ComponentFixture<CubeItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CubeItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CubeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
