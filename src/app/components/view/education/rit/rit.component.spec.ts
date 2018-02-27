import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RitComponent } from './rit.component';

describe('RitComponent', () => {
  let component: RitComponent;
  let fixture: ComponentFixture<RitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
