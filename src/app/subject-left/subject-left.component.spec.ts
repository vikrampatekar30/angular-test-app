import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectLeftComponent } from './subject-left.component';

describe('SubjectLeftComponent', () => {
  let component: SubjectLeftComponent;
  let fixture: ComponentFixture<SubjectLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubjectLeftComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubjectLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
