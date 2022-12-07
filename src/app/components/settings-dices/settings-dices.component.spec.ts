import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { fightersReducer } from '../redux/reducers/fighters.reducer';

import { SettingsDicesComponent } from './settings-dices.component';

describe('SettingsDicesComponent', () => {
  let component: SettingsDicesComponent;
  let fixture: ComponentFixture<SettingsDicesComponent>;
  let routerSpy = {navigate: jasmine.createSpy('navigate')};

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingsDicesComponent ],
      imports:[
        StoreModule.forRoot({fighters: fightersReducer}),
        FormsModule,
        ReactiveFormsModule],
      providers: [
        { provide: Router, useValue: routerSpy }]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SettingsDicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
