import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemminovaComponent } from './temminova.component';

describe('TemminovaComponent', () => {
  let component: TemminovaComponent;
  let fixture: ComponentFixture<TemminovaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemminovaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemminovaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
