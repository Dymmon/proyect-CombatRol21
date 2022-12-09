import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import {
  FigthersState,
  selectArray,
  selectMobs,
  selectMobsDices,
} from "../redux/interfaces/figthers.reducers";
import { PlayerInterface } from "../shared/player.interface";
import {
  SETMOBSDICES,
  SETPLAYERSSTATS,
} from "../redux/actions/fighters.actions";

@Component({
  selector: "app-settings-dices",
  templateUrl: "./settings-dices.component.html",
  styleUrls: ["./settings-dices.component.css"],
})
export class SettingsDicesComponent implements OnInit {
  public dicesForm!: FormGroup;
  playersStore: object[];
  playersUpdated: Array<PlayerInterface> = [];
  support: Array<boolean>;
  mobDices: Array<number> = [];
  playerIndex: number = 0;
  constructor(
    private formBuilder: FormBuilder,
    private store: Store<FigthersState>,
    private router: Router
  ) {
    this.store.select(selectArray).subscribe((res) => {
      this.playersStore = res;
    });
    this.store.select(selectMobs).subscribe((res) => {
      this.support = Array(res).fill(0);
    });
  }
  ngOnInit(): void {
    this.dicesForm = this.formBuilder.group({
      playerDice: [0, Validators.required],
      mobDice: [0, Validators.required],
    });
  }
  savePlayer(event: any) {
    if (this.dicesForm.valid) {
      const player = {
        name: this.playersStore[this.playerIndex]["name"],
        playerDex: this.playersStore[this.playerIndex]["playerDex"],
        playersReact: this.playersStore[this.playerIndex]["playersReact"],
        playerCont: this.playersStore[this.playerIndex]["playerCont"],
        playerDice: this.dicesForm.value["playerDice"],
      };
      this.playersUpdated.push(player);
      event.target.disabled = true;
      this.playerIndex++;
    } else alert("Missing data");
  }
  savePlayersInfo(event: any) {
    this.store.dispatch(
      SETPLAYERSSTATS({ payload: { array: this.playersUpdated } })
    );
    event.target.disabled = true;
  }
  saveMob(event: any) {
    if (this.dicesForm.valid) {
      const mobDice = this.dicesForm.value["mobDice"];
      this.mobDices.push(mobDice);
      event.target.disabled = true;
    } else alert("Missing data");
  }
  saveMobsInfo(event: any) {
    this.store.dispatch(SETMOBSDICES({ payload: { mobDices: this.mobDices } }));
    event.target.disabled = true;
  }
  toNext() {
    this.router.navigate(["combat"]);
  }
}
