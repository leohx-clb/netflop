import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerialTableComponent } from './serial-table.component';

describe('SerialTableComponent', () => {
  let component: SerialTableComponent;
  let fixture: ComponentFixture<SerialTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SerialTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SerialTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
