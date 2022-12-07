import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { SETPLAYERSSTATS } from '../redux/actions/fighters.actions';
import { FigthersState, selectPlayers } from '../redux/interfaces/figthers.reducers';
import { PlayerInterface } from '../shared/player.interface';

@Component({
  selector: 'app-settings-players',
  templateUrl: './settings-players.component.html',
  styleUrls: ['./settings-players.component.css']
})
export class SettingsPlayersComponent implements OnInit {
  players: Array<PlayerInterface> = [];
  support: Array<boolean>;
  public playersForm !: FormGroup ;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private store: Store<FigthersState>
    ) {
      this.store.select(selectPlayers)
      .subscribe(res => {
        this.support = Array(res).fill(0)
      })
    }
    ngOnInit(): void {
      this.playersForm = this.formBuilder.group({
        name: ['', Validators.required],
        playerDex: [0, Validators.required],
        playersReact: [0, Validators.required],
        playerCont: [0, Validators.required],
      })
    }
    savePlayer(event: any){
      if(this.playersForm.valid){
        const player = {
          name:this.playersForm.value['name'],
          playerDex:this.playersForm.value['playerDex'],
          playersReact:this.playersForm.value['playersReact'],
          playerCont:this.playersForm.value['playerCont'],
          playerDice: 0
        }
        this.players.push(player);
        event.target.disabled = true;
      }else alert("Missing data");
    }
    savePlayersInfo(){
      this.store.dispatch(SETPLAYERSSTATS({payload: {array: this.players}}));
      this.router.navigate(['settingsMobs']);
    }
}
