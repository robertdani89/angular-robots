import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerbotComponent } from './beerbot.component';

describe('BeerbotComponent', () => {
  let component: BeerbotComponent;
  let fixture: ComponentFixture<BeerbotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeerbotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerbotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
