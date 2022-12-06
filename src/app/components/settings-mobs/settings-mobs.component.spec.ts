import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { fightersReducer } from '../redux/reducers/fighters.reducer';

import { SettingsMobsComponent } from './settings-mobs.component';

describe('SettingsMobsComponent', () => {
  let component: SettingsMobsComponent;
  let fixture: ComponentFixture<SettingsMobsComponent>;
  let routerSpy = {navigate: jasmine.createSpy('navigate')};

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingsMobsComponent ],
      imports:[
        StoreModule.forRoot({fighters: fightersReducer}),
        FormsModule,
        ReactiveFormsModule],
      providers: [
        { provide: Router, useValue: routerSpy }]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SettingsMobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should be alert', fakeAsync (() => {
    component.mobsForm.controls['mobName'].setValue('');
    component.mobsForm.controls['mobDex'].setValue('');
    component.mobsForm.controls['mobReact'].setValue('');
    component.mobsForm.controls['mobCont'].setValue('');
    expect(component.saveMobsInfo()).toBeUndefined();
  }));
  it('should be undefined', fakeAsync (() => {
    component.mobsForm.controls['mobName'].setValue('name');
    component.mobsForm.controls['mobDex'].setValue(100);
    component.mobsForm.controls['mobReact'].setValue(100);
    component.mobsForm.controls['mobCont'].setValue(100);
    expect(component.saveMobsInfo()).toBeUndefined();
  }));
});
