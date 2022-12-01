import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CombatComponent } from './components/combat/combat.component';
import { ErrorComponent } from './components/error/error.component';
import { NPlayersComponent } from './components/n-players/n-players.component';
import { SettingsMobsComponent } from './components/settings-mobs/settings-mobs.component';
import { SettingsPlayersComponent } from './components/settings-players/settings-players.component';

const routes: Routes = [
  {path: '', redirectTo: 'numberofplayers', pathMatch: 'full'},
  {path: 'numberofplayers', component: NPlayersComponent},
  {path: 'settingsPlayers', component: SettingsPlayersComponent},
  {path: 'settingsMobs', component: SettingsMobsComponent},
  {path: 'combat', component: CombatComponent},
  {path: '**', component: ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
