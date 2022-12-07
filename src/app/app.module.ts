import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CombatComponent } from './components/combat/combat.component';
import { NPlayersComponent } from './components/n-players/n-players.component';
import { fightersReducer } from './components/redux/reducers/fighters.reducer';
import { ErrorComponent } from './components/error/error.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SettingsPlayersComponent } from './components/settings-players/settings-players.component';
import { SettingsMobsComponent } from './components/settings-mobs/settings-mobs.component';
import { SettingsDicesComponent } from './components/settings-dices/settings-dices.component';

@NgModule({
  declarations: [
    AppComponent,
    CombatComponent,
    NPlayersComponent,
    ErrorComponent,
    SettingsPlayersComponent,
    SettingsMobsComponent,
    SettingsDicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    StoreModule.forRoot({fighters: fightersReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
