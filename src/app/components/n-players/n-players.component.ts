import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { FigthersState } from '../redux/interfaces/figthers.reducers';
import { SETFIGHTERS } from '../redux/actions/fighters.actions'

@Component({
  selector: 'app-n-players',
  templateUrl: './n-players.component.html',
  styleUrls: ['./n-players.component.css']
})
export class NPlayersComponent implements OnInit {

  public nPlayersForm !: FormGroup ;
  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private store: Store<FigthersState>
    ) { }

  ngOnInit(): void {
    this.nPlayersForm = this.formBuilder.group({
      players: ['', Validators.required],
      mobs: ['', Validators.required]
    })
  }

  storeNumbers(){
    if(this.nPlayersForm.valid){
      const payload = {
        players: this.nPlayersForm.value['players'],
        mobs: this.nPlayersForm.value['mobs']};
      this.store.dispatch(SETFIGHTERS({payload}));
      this.router.navigate(['settingsPlayers']);
    }else alert("Missing data");
  }
}
