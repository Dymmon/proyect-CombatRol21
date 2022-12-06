import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { fightersReducer } from '../components/redux/reducers/fighters.reducer';

import { InitGuard } from './init.guard';

describe('InitGuard', () => {
  let guard: InitGuard;
  let routerSpy = {navigate: jasmine.createSpy('navigate')};

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        StoreModule.forRoot({fighters: fightersReducer})],
      providers: [
        { provide: Router, useValue: routerSpy }
      ]
    });
    guard = TestBed.inject(InitGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
  it('should be something', () => {
    const result = guard.canActivate(new ActivatedRouteSnapshot(), <RouterStateSnapshot>{url: 'testUrl'});
    expect(result).toBeFalsy();
  })
});
