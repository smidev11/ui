import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DegreasingComponent } from './degreasing.component';

describe('DegreasingComponent', () => {
  let component: DegreasingComponent;
  let fixture: ComponentFixture<DegreasingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DegreasingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DegreasingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
