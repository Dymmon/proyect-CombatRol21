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

@NgModule({
  declarations: [
    AppComponent,
    CombatComponent,
    NPlayersComponent,
    ErrorComponent
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
