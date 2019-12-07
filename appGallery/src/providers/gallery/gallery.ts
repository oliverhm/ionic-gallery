import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

const gallerySearchUrl = 'https://api.imgur.com/3/gallery/search/';
const clientId = 'Client-ID 1ceddedc03a5d71';

@Injectable()
export class GalleryProvider {
  constructor(public http: HttpClient) {}

  public searchImages(search: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': clientId
      }),
      params: new HttpParams({fromString: `q=${search}`})
    };

    return this.http.get(gallerySearchUrl, httpOptions)
      .pipe(
        map((response: any) => {
        const data = response!.data;
        const images = data
          .filter((gallery: any) => gallery.images)
          .map((gallery: any) => gallery.images);

          return [].concat.apply([], images)
            .filter((cats: any) => cats.type !== 'video/mp4');
        })
      );
  }
}
