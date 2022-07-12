import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GranteesPageService {
  hideSearchBar = false;
  constructor() { }

  setStatus(status: boolean): void {
    this.hideSearchBar = status;
  }

  getStatus(): boolean {
    return this.hideSearchBar;
  }
}
