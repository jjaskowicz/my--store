import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface ImageList {
    id: string;
    url: string;
    author: string, 
    download_url: string;
    height: number;
    width: number;
}

@Injectable({ providedIn: 'root' })
export class ShotWithService {

  constructor( private http: HttpClient
  ) {}

  getImagesList(): Observable<ImageList[]> {
    return this.http.get<ImageList[]>('https://picsum.photos/v2/list?limit=5')
  }
}
