import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsFightComponent } from './settings-fight.component';

describe('SettingsFightComponent', () => {
  let component: SettingsFightComponent;
  let fixture: ComponentFixture<SettingsFightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingsFightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SettingsFightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
