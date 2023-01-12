import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerselectComponent } from './playerselect.component';

describe('PlayerselectComponent', () => {
  let component: PlayerselectComponent;
  let fixture: ComponentFixture<PlayerselectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerselectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayerselectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
