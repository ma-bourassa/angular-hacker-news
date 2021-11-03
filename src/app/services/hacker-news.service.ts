import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { filter, map, mergeMap, toArray } from 'rxjs/operators';
import { forkJoin, Observable } from 'rxjs';
import { Story } from '../interfaces/story';
import { Comment } from '../interfaces/comment';

@Injectable({
  providedIn: 'root',
})
export class HackerNewsService {
  constructor(private _http: HttpClient) {}

  apiUrl = 'https://hacker-news.firebaseio.com/v0/';

  getTopStories(numberOfStory: number): Observable<Story[]> {
    return this._http.get<number[]>(`${this.apiUrl}/topstories.json`).pipe(
      mergeMap((ids) => {
        const filterIds = ids.splice(0, numberOfStory);
        return forkJoin(
          filterIds.map((id) => {
            return this.getItem(id);
          })
        );
      })
    );
  }

  getItem(id: number | string) {
    return this._http.get<Story>(`${this.apiUrl}/item/${id}.json`);
  }

  getTopComments(kids: number[]) {
    return forkJoin(
      kids.map((id) => {
        return this._http.get<Comment>(`${this.apiUrl}/item/${id}.json`);
      })
    );
  }
}
