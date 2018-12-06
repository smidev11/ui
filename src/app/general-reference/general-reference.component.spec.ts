import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralReferenceComponent } from './general-reference.component';

describe('GeneralReferenceComponent', () => {
  let component: GeneralReferenceComponent;
  let fixture: ComponentFixture<GeneralReferenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralReferenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralReferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
