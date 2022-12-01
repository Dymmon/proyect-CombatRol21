import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsMobsComponent } from './settings-mobs.component';

describe('SettingsMobsComponent', () => {
  let component: SettingsMobsComponent;
  let fixture: ComponentFixture<SettingsMobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingsMobsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SettingsMobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
