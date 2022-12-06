import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { fightersReducer } from '../redux/reducers/fighters.reducer';

import { NPlayersComponent } from './n-players.component';

describe('NPlayersComponent', () => {
  let component: NPlayersComponent;
  let fixture: ComponentFixture<NPlayersComponent>;
  let routerSpy = {navigate: jasmine.createSpy('navigate')};

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NPlayersComponent ],
      imports: [StoreModule.forRoot({fighters: fightersReducer}),
        FormsModule,
        ReactiveFormsModule],
      providers: [
        { provide: Router, useValue: routerSpy }]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NPlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should be alert', fakeAsync (() => {
    component.nPlayersForm.controls['players'].setValue('');
    component.nPlayersForm.controls['mobs'].setValue('');
    expect(component.storeNumbers()).toBeUndefined();
  }))
  it('should be undefined', fakeAsync (() => {
    component.nPlayersForm.controls['players'].setValue(4);
    component.nPlayersForm.controls['mobs'].setValue(4);
    expect(component.storeNumbers()).toBeUndefined();
  }))
});
