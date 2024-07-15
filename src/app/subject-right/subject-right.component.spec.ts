import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectRightComponent } from './subject-right.component';

describe('SubjectRightComponent', () => {
  let component: SubjectRightComponent;
  let fixture: ComponentFixture<SubjectRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubjectRightComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubjectRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
