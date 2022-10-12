import { Injectable } from '@angular/core'
import { Videos } from './videos'
import { HttpClient } from '@angular/common/http'
import { catchError, Observable, of, tap } from 'rxjs'

@Injectable()
export class VideosServiceMockup {
  constructor(private http: HttpClient) {}

  getVideoList(): Observable<Videos[]> {
    return this.http.get<Videos[]>('api/videos').pipe(
      tap((res) => this.log(res)),
      catchError((err) => this.handleError(err, []))
    )
  }

  getVideoById(videoId: number): Observable<Videos | undefined> {
    return this.http.get<Videos>(`api/videos/${videoId}`).pipe(
      tap((res) => this.log(res)),
      catchError((err) => this.handleError(err, undefined))
    )
  }

  private log(res: Videos[] | Videos | undefined) {
    console.log(res)
  }

  private handleError(error: Error, errorValue: any) {
    console.error(error)
    return of(errorValue)
  }
}
