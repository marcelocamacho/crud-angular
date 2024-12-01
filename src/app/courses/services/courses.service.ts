import { Injectable } from '@angular/core';
import { Course } from '../model/course';
import { HttpClient } from '@angular/common/http';
import { delay, first, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly API ='api/courses';

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Course[]>(this.API)
      .pipe(
        first(),
        delay(600),
        tap(courses => console.log(courses))
      );
  }

  loadById(id: string){
    this.httpClient.get<Course>(`${this.API}/${id}`);
  }

  save(record: Partial<Course>){
    return this.httpClient.post<Course>(this.API,record).pipe(first());
  }
}
