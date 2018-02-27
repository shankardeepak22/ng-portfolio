import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AitComponent } from './ait.component';

describe('AitComponent', () => {
  let component: AitComponent;
  let fixture: ComponentFixture<AitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
