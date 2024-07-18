import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Gif, SearchResponse } from '../interfaces/gifs.interface';


@Injectable({
  providedIn: 'root',
})
export class GifService {
  constructor(private httpClient: HttpClient) {
    this.loadLocalStorage();
  }

  public gifList: Gif[] = [];
  private _tagsHistory: string[] = [];
  private serviceURL: string = 'https://api.giphy.com/v1/gifs';
  private apiKey: string = 'pSldfT7rL7WftkJA5kiLpYgincv5p7EZ';
  private limit: number = 10;

  get tagsHistory() {
    return [...this._tagsHistory];
  }

  searchTag(tagHistory: string): void {

    const params = new HttpParams()
      .set('apiKey', this.apiKey)
      .set('q', tagHistory)
      .set('limit', this.limit);

    if (this.validTag(tagHistory)) {
      this.organizeTags(tagHistory);

      this.httpClient
        .get<SearchResponse>(` ${this.serviceURL}/search/`, { params: params })
        .subscribe(
          (resp) => { this.gifList = resp.data
          }
        );


    }
  }

  private validTag(tag: string): boolean {
    return !(tag.length === 0);
  }

  private organizeTags(tag: string): void {
    tag = tag.toLowerCase();
    if (this._tagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter((item) => item !== tag);
    }

    this._tagsHistory.unshift(tag.toLocaleLowerCase());
    this._tagsHistory = this._tagsHistory.splice(0, 10);
    this.saveLocalStorage();
  }

  private saveLocalStorage():void {
    localStorage.setItem('history', JSON.stringify (this._tagsHistory));
  }

  private loadLocalStorage(): void {
    if ( ! localStorage.getItem('history')) return;

      this._tagsHistory = JSON.parse(localStorage.getItem('history')! );


    if ( this._tagsHistory.length === 0 ) return;

    this.searchTag(this._tagsHistory[0]);

  }
}
