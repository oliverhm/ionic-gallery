import { LoadingProvider } from './../../providers/loading/loading';
import { GalleryProvider } from '../../providers/gallery/gallery';
import { Component } from '@angular/core';
import { PopoverController } from 'ionic-angular';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public cats: any;
  public view: string = 'grid';

  constructor(
    private galleryProvider: GalleryProvider,
    private popoverCtrl: PopoverController,
    private loading: LoadingProvider
  ) {}

  ionViewDidLoad() {
    this.loading.presentLoading();
    this.galleryProvider.searchImages('cats')
      .pipe(
        finalize(() => this.loading.dismissLoading())
      )
      .subscribe(cats => this.cats = cats);
  }

  public presentPopover(event: any) {
    let popover = this.popoverCtrl.create('PopoverPage', {}, {
      enableBackdropDismiss: false
    });

    popover.present({
      ev: event
    });

    popover.onDidDismiss((view: string) => this.view = view);
  }

  public getTitle(title: string): string {
    return title ? title : 'Little Cat';
  }

  public getDescription(description: string): string {
    return description ? description : 'Some description...';
  }
}
