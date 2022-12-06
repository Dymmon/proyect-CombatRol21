import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { fightersReducer } from '../redux/reducers/fighters.reducer';

import { CombatComponent } from './combat.component';

describe('CombatComponent', () => {
  let component: CombatComponent;
  let fixture: ComponentFixture<CombatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CombatComponent ],
      imports:[
        StoreModule.forRoot({fighters: fightersReducer})],
    })
    .compileComponents();

    fixture = TestBed.createComponent(CombatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
