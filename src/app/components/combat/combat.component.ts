import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { exhaustMap, take } from 'rxjs';
import { FigthersState, selectArray, selectMobsStats, selectPlayers } from '../redux/interfaces/figthers.reducers';

@Component({
  selector: 'app-combat',
  templateUrl: './combat.component.html',
  styleUrls: ['./combat.component.css']
})
export class CombatComponent implements OnInit {
  players: object[];
  mob: object;
  constructor(
    private store: Store<FigthersState>,
    private router: Router) {
    this.store.select(selectArray)
    .subscribe(res => {
      this.players = res;
      this.store.select(selectMobsStats)
      .subscribe(res => {
        this.mob = res;
      });
    });
  }

  ngOnInit(): void {
  }

}
