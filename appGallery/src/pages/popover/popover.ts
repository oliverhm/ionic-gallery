import { Component } from '@angular/core';
import { IonicPage, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  template: `
    <ion-list>
      <ion-list-header>Choose View:</ion-list-header>
      <button ion-item (click)="chooseView('grid')">Grid</button>
      <button ion-item (click)="chooseView('thumbnail')">Thumbnail List</button>
      <button ion-item (click)="chooseView('slide')">Slide</button>
    </ion-list>
  `
})
export class PopoverPage {
  constructor(public viewCtrl: ViewController) {}

  chooseView(view: string): void {
    this.viewCtrl.dismiss(view);
  }
}
