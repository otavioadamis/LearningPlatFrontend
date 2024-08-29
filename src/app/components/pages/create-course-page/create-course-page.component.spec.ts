import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCoursePageComponent } from './create-course-page.component';

describe('CreateCoursePageComponent', () => {
  let component: CreateCoursePageComponent;
  let fixture: ComponentFixture<CreateCoursePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateCoursePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateCoursePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
