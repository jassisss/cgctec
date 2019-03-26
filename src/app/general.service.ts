import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  showAdmin = false;
  showAuth = false;
  showSite = true;
  showGuest = false;

  constructor() {
  }

  setUserLoged(u) {
    switch (u) {
      case 'admin':
        this.showAdmin = true;
        this.showAuth = false;
        this.showSite = false;
        this.showGuest = false;
        break;

      case 'convidado':
        this.showAdmin = false;
        this.showAuth = false;
        this.showSite = false;
        this.showGuest = true;
        break;

      case 'site':
        this.showAdmin = false;
        this.showAuth = false;
        this.showSite = true;
        this.showGuest = false;
        break;

      case 'auth':
        this.showAdmin = false;
        this.showAuth = true;
        this.showSite = false;
        this.showGuest = false;
        break;

      default:
        this.showAdmin = false;
        this.showAuth = false;
        this.showSite = true;
        this.showGuest = false;
        break;
    }
  }
}
