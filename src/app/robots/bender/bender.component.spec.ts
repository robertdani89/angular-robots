import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BenderComponent } from './bender.component';

describe('BenderComponent', () => {
  let component: BenderComponent;
  let fixture: ComponentFixture<BenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BenderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
