import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { FigthersState } from '../redux/interfaces/figthers.reducers';

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
      players: ['', Validators.required]
    })
    // this.store.dispatch(RESET());
    // this.signInForm = this.formBuilder.group({
    //   rut: ['', [Validators.required, Validators.minLength(7), Validators.maxLength(10)]]
    // })
  }

  storeNumbers(){
    alert("tremendo" + this.nPlayersForm.value['players']);
  //   const rut = this.signInForm.value["rut"];
  //   (this.signInForm.valid)? this.inDB(rut)
  //   .subscribe(res=>{
  //     if(res.code === 200){
  //       this.store.dispatch(AUTHRUT({payload:{rut:rut, pubPem: res.pubPem}}));
  //       this.router.navigate(['login/password']);
  //     }else{alert("Missing data")}})
  //   : alert("Missing data");
  }
}
