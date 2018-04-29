import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MindexComponent } from './mindex.component';

describe('MindexComponent', () => {
  let component: MindexComponent;
  let fixture: ComponentFixture<MindexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MindexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MindexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
