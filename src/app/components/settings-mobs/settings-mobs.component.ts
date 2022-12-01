import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { SETMOBSTATS } from '../redux/actions/fighters.actions';
import { FigthersState, selectPlayers } from '../redux/interfaces/figthers.reducers';

@Component({
  selector: 'app-settings-mobs',
  templateUrl: './settings-mobs.component.html',
  styleUrls: ['./settings-mobs.component.css']
})
export class SettingsMobsComponent implements OnInit {
  mob: object;
  public mobsForm !: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private store: Store<FigthersState>
    ) {
      this.store.select(selectPlayers)
      .subscribe(res=>{
        if(res === 0) this.router.navigate(['numberofplayers']);
      })
    }
  ngOnInit(): void {
    this.mobsForm = this.formBuilder.group({
      mobName: ['', Validators.required],
      mobDex: [0, Validators.required],
      mobReact: [0, Validators.required],
      mobCont: [0, Validators.required]
    })
  }
  saveMobsInfo(){
    if(this.mobsForm.valid){
      const mob = {
        mobName: this.mobsForm.value['mobName'],
        mobDex: this.mobsForm.value['mobDex'],
        mobReact: this.mobsForm.value['mobReact'],
        mobCont: this.mobsForm.value['mobCont']
      }
      this.store.dispatch(SETMOBSTATS({payload:{mobStat: mob}}));
      this.router.navigate(['combat']);
    }else alert("Invalid data");

  }

}
