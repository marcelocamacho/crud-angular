import { ResolveFn } from '@angular/router';
import { CoursesService } from '../services/courses.service';
import { inject } from '@angular/core';
import { Course } from '../model/course';
import { of } from 'rxjs';

export const courseResolver: ResolveFn<Course> = (route, state) => {

  const service: CoursesService = inject(CoursesService);

  if(route.params && route. params['id']){
    return service.loadById(route.params['id']);
  }
  return of({_id: '', name: '', category:''});
};
