import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentStudentsComponent } from './department-students.component';

describe('DepartmentStudentsComponent', () => {
  let component: DepartmentStudentsComponent;
  let fixture: ComponentFixture<DepartmentStudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartmentStudentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepartmentStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
