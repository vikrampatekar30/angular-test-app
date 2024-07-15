import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BehaviorSubjectLeftComponent } from './behavior-subject-left.component';

describe('BehaviorSubjectLeftComponent', () => {
  let component: BehaviorSubjectLeftComponent;
  let fixture: ComponentFixture<BehaviorSubjectLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BehaviorSubjectLeftComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BehaviorSubjectLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
