import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemarksFormComponent } from './remarks-form.component';

describe('RemarksFormComponent', () => {
  let component: RemarksFormComponent;
  let fixture: ComponentFixture<RemarksFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemarksFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemarksFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
