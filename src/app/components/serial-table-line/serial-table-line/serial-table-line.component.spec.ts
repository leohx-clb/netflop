import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerialTableLineComponent } from './serial-table-line.component';

describe('SerialTableLineComponent', () => {
  let component: SerialTableLineComponent;
  let fixture: ComponentFixture<SerialTableLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SerialTableLineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SerialTableLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
