import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllDepartmentsListComponent } from './all-departments-list.component';

describe('AllDepartmentsListComponent', () => {
  let component: AllDepartmentsListComponent;
  let fixture: ComponentFixture<AllDepartmentsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllDepartmentsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllDepartmentsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
