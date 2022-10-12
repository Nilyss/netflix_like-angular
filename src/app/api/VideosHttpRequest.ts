import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { catchError, Observable, of, tap } from 'rxjs'
import { Videos } from './videos'

@Injectable()
export class VideosService {
  constructor(private http: HttpClient) {}

  headers = new HttpHeaders().set(
    'X-RapidAPI-Key',
    '6efd648ce3msh9aa21935d50c4d3p14c044jsnb316ecdeb069'
  )

  getVideosList(): Observable<Videos[]> {
    return this.http
      .get<Videos[]>('https://unogs-unogs-v1.p.rapidapi.com/search/titles?', {
        context: undefined,
        headers: this.headers,
        observe: 'body',
        params: {
          type: 'series',
          title: 'Stranger things',
          order_by: 'date',
        },
        reportProgress: false,
        withCredentials: false,
      })
      .pipe(
        tap((res) => this.log(res)),
        catchError((err) => this.handleError(err, undefined))
      )
  }

  private log(res: Videos[] | undefined) {
    console.log(res)
  }

  private handleError(error: Error, errorValue: any) {
    console.error(error)
    return of(errorValue)
  }
}
