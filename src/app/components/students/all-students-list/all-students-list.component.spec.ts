import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllStudentsListComponent } from './all-students-list.component';

describe('AllStudentsListComponent', () => {
  let component: AllStudentsListComponent;
  let fixture: ComponentFixture<AllStudentsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllStudentsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllStudentsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
