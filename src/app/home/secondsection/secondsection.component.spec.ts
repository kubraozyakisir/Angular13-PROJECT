import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondsectionComponent } from './secondsection.component';

describe('SecondsectionComponent', () => {
  let component: SecondsectionComponent;
  let fixture: ComponentFixture<SecondsectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondsectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondsectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
