import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import {
  FigthersState,
  selectPlayers,
} from "../components/redux/interfaces/figthers.reducers";

@Injectable({
  providedIn: "root",
})
export class InitGuard implements CanActivate {
  status: boolean = false;
  constructor(private store: Store<FigthersState>, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    this.store.select(selectPlayers).subscribe((res) => {
      if (res !== 0) {
        this.status = true;
      } else {
        this.router.navigate(["numberofplayers"]);
        this.status = false;
      }
    });
    return this.status;
  }
}
