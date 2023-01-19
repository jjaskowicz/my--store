import {
  ElementRef,
  Injectable,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@spartacus/core';
import {
  LaunchDialogService,
  LAUNCH_CALLER,
  ModalRef,
  ModalService,
} from '@spartacus/storefront';
import { interval, Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { SimpleDialogComponent } from '../shared/dialogs/simple-dialog/simple-dialog.component';
const MINUTES_UNITL_AUTO_LOGOUT = 0.1;
const CHECK_INTERVAL = 5000;
const LOGOUT_KEY = 'logout';

@Injectable({
  providedIn: 'root',
})
export class AutoLogoutService {
  value: any;
  simpleModalRef!: ModalRef | null;
  subscription: Subscription = new Subscription();

  constructor(
    private router: Router,
    private modalService: ModalService,
    private authService: AuthService
  ) {
    // this.check();
    // this.initListener();
    // this.initInterval();
    // localStorage.setItem(LOGOUT_KEY, Date.now().toString());
  }

  getLastAction() {
    return parseInt(localStorage.getItem(LOGOUT_KEY)!);
  }

  setLastAction(lastAction: number) {
    localStorage.setItem(LOGOUT_KEY, lastAction.toString());
  }

  initListener() {
    document.body.addEventListener('click', () => this.reset());
    window.addEventListener('storage', () => this.storageEvt());
  }

  reset() {
    this.setLastAction(Date.now());
  }

  initInterval() {
    this.subscription = interval(CHECK_INTERVAL)
      .pipe(tap((product: any) => this.check()))
      .subscribe();
  }

  check() {
    const now = Date.now();
    const timeleft =
      this.getLastAction() + MINUTES_UNITL_AUTO_LOGOUT * 60 * 1000;
    const diff = timeleft - now;
    const isTimeout = diff < 0;

    if (isTimeout) {
      // const dialog = this.launchDialogService
      //   .openDialog(LAUNCH_CALLER.ANONYMOUS_CONSENT, this.openElement, this.vcr)
      //   ?.subscribe();

      this.simpleModalRef = this.modalService.open(SimpleDialogComponent, {
        centered: true,
        size: 'lg',
      });
      this.simpleModalRef.result.then((logout) => {
        !!logout
          ? (this.authService.logout(), this.subscription.unsubscribe())
          : null;
      });
    }
  }

  storageEvt() {
    this.value = localStorage.getItem(LOGOUT_KEY);
  }
}
