import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClmComponent } from './clm.component';

describe('ClmComponent', () => {
  let component: ClmComponent;
  let fixture: ComponentFixture<ClmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
