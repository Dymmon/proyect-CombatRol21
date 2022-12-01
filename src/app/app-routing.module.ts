import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CombatComponent } from './components/combat/combat.component';
import { ErrorComponent } from './components/error/error.component';
import { NPlayersComponent } from './components/n-players/n-players.component';
import { SettingsFightComponent } from './components/settings-fight/settings-fight.component';

const routes: Routes = [
  {path: '', redirectTo: 'numberofplayers', pathMatch: 'full'},
  {path: 'numberofplayers', component: NPlayersComponent},
  {path: 'settings', component: SettingsFightComponent},
  {path: 'combat', component: CombatComponent},
  {path: '**', component: ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
