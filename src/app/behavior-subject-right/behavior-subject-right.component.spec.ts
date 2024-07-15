import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BehaviorSubjectRightComponent } from './behavior-subject-right.component';

describe('BehaviorSubjectRightComponent', () => {
  let component: BehaviorSubjectRightComponent;
  let fixture: ComponentFixture<BehaviorSubjectRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BehaviorSubjectRightComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BehaviorSubjectRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
