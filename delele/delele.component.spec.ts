import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleleComponent } from './delele.component';

describe('DeleleComponent', () => {
  let component: DeleleComponent;
  let fixture: ComponentFixture<DeleleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
