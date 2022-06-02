import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtrathreeComponent } from './extrathree.component';

describe('ExtrathreeComponent', () => {
  let component: ExtrathreeComponent;
  let fixture: ComponentFixture<ExtrathreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtrathreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtrathreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
