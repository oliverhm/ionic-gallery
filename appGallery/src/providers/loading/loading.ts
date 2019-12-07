import { Injectable } from '@angular/core';
import { LoadingController, Loading } from 'ionic-angular';

@Injectable()
export class LoadingProvider {
  private loading: Loading;
  constructor(private loadingCtrl: LoadingController) {}

  public presentLoading(): void {
    this.loading = this.loadingCtrl.create({
      spinner: "crescent",
    });

    this.loading.present();
  }

  public dismissLoading(): void {
    this.loading.dismiss();
  }
}
