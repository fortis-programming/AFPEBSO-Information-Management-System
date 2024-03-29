import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  title = 'title';

  constructor() { }

  setTitle(title: string): void {
    this.title = title;
  }

  getTitle(): string {
    return this.title;
  }
}
