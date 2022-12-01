import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsPlayersComponent } from './settings-players.component';

describe('SettingsPlayersComponent', () => {
  let component: SettingsPlayersComponent;
  let fixture: ComponentFixture<SettingsPlayersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingsPlayersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SettingsPlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
