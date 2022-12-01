import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NPlayersComponent } from './n-players.component';

describe('NPlayersComponent', () => {
  let component: NPlayersComponent;
  let fixture: ComponentFixture<NPlayersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NPlayersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NPlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
