import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Diary} from '../../model/diary/diary';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DiaryService {

  constructor(private http: HttpClient) { }

  private DiaryUrl = 'http://localhost:8080/api/auth/diary/';

  createDiary(diary: Diary): Observable<Diary> {
    return this.http.post<Diary>(this.DiaryUrl, diary);
  }
}
