import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { fightersReducer } from '../redux/reducers/fighters.reducer';

import { SettingsPlayersComponent } from './settings-players.component';

describe('SettingsPlayersComponent', () => {
  let component: SettingsPlayersComponent;
  let fixture: ComponentFixture<SettingsPlayersComponent>;
  let routerSpy = {navigate: jasmine.createSpy('navigate')};

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingsPlayersComponent ],
      imports:[
        StoreModule.forRoot({fighters: fightersReducer}),
        FormsModule,
        ReactiveFormsModule],
      providers: [
        { provide: Router, useValue: routerSpy }]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SettingsPlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should be alert', fakeAsync (() => {
    component.playersForm.controls['name'].setValue('');
    component.playersForm.controls['playerDex'].setValue('');
    component.playersForm.controls['playersReact'].setValue('');
    component.playersForm.controls['playerCont'].setValue('');
    expect(component.savePlayer()).toBeUndefined();
  }));
  it('should be undefined', fakeAsync (() => {
    component.playersForm.controls['name'].setValue('name');
    component.playersForm.controls['playerDex'].setValue(100);
    component.playersForm.controls['playersReact'].setValue(100);
    component.playersForm.controls['playerCont'].setValue(100);
    expect(component.savePlayer()).toBeUndefined();
  }));
  it('should be undefined', () => {
    expect(component.savePlayersInfo()).toBeUndefined();
  })

});
