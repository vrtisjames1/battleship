import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P1gameComponent } from './p1game.component';

describe('P1gameComponent', () => {
  let component: P1gameComponent;
  let fixture: ComponentFixture<P1gameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ P1gameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(P1gameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
