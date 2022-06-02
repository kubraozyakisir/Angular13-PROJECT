import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtratwoComponent } from './extratwo.component';

describe('ExtratwoComponent', () => {
  let component: ExtratwoComponent;
  let fixture: ComponentFixture<ExtratwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtratwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtratwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
