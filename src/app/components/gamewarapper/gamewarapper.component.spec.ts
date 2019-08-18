import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GamewarapperComponent } from './gamewarapper.component';

describe('GamewarapperComponent', () => {
  let component: GamewarapperComponent;
  let fixture: ComponentFixture<GamewarapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamewarapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamewarapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
