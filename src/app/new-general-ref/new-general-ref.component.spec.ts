import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewGeneralRefComponent } from './new-general-ref.component';

describe('NewGeneralRefComponent', () => {
  let component: NewGeneralRefComponent;
  let fixture: ComponentFixture<NewGeneralRefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewGeneralRefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewGeneralRefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
