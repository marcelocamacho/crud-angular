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
    return this.httpClient.get<Course>(`${this.API}/${id}`);
  }

  save(record: Partial<Course>){
    console.log(record);
    if(record._id){
      return this.update(record)
    }
    return this.create(record)
  }

  private create(record: Partial<Course>){
    console.log("Create");
    return this.httpClient.post<Course>(this.API,record).pipe(first());
  }

  private update(record: Partial<Course>){
    console.log("Update");
    return this.httpClient.put<Course>(`${this.API}/${record._id}`,record).pipe(first())
  }

  delete(id: string){
    return this.httpClient.delete(`${this.API}/${id}`);
  }
}
