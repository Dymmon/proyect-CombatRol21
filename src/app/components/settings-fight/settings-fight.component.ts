import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { FigthersState, selectPlayers } from '../redux/interfaces/figthers.reducers';

@Component({
  selector: 'app-settings-fight',
  templateUrl: './settings-fight.component.html',
  styleUrls: ['./settings-fight.component.css']
})
export class SettingsFightComponent implements OnInit {
  
  players: number;
  mobs: object;
  public nPlayersForm !: FormGroup ;
  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private store: Store<FigthersState>
    ) {
      this.store.select(selectPlayers)
      .subscribe(res=>{
        console.log("asdasdasd");
        console.log(res);
        if(res !== 0) this.players = res;
      })
    }
  
  ngOnInit(): void {
    this.nPlayersForm = this.formBuilder.group({
      players: ['', Validators.required],
      mobs: ['', Validators.required]
    })
    }

}


