import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { SETPLAYERSSTATS } from '../redux/actions/fighters.actions';
import { FigthersState, selectPlayers } from '../redux/interfaces/figthers.reducers';

@Component({
  selector: 'app-settings-players',
  templateUrl: './settings-players.component.html',
  styleUrls: ['./settings-players.component.css']
})
export class SettingsPlayersComponent implements OnInit {
  players: object[] = [];
  index: number = 0;
  public playersForm !: FormGroup ;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private store: Store<FigthersState>
    ) {
      this.store.select(selectPlayers)
      .subscribe(res=>{
        if(res !== 0){
          for(let i = 0; i < res; i++){
            this.players[i] = {};
          }
        }else this.router.navigate(['numberofplayers']);
      })
    }
    ngOnInit(): void {
      this.playersForm = this.formBuilder.group({
        name: ['', Validators.required],
        playerDex: [0, Validators.required],
        playersReact: [0, Validators.required],
        playerCont: [0, Validators.required]
      })
    }
    savePlayer(){
      if(this.playersForm.valid){
        const player = {
          name:this.playersForm.value['name'],
          playerDex:this.playersForm.value['playerDex'],
          playersReact:this.playersForm.value['playersReact'],
          playerCont:this.playersForm.value['playerCont']
        }
        this.players[this.index] = player;
        this.index++;
      }
    }
    savePlayersInfo(){
      this.store.dispatch(SETPLAYERSSTATS({payload: this.players}));
      this.router.navigate(['settingsMobs']);
    }
}
