import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P2gameComponent } from './p2game.component';

describe('P2gameComponent', () => {
  let component: P2gameComponent;
  let fixture: ComponentFixture<P2gameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ P2gameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(P2gameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
