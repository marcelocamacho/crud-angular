import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';
import { CoursesService } from '../services/courses.service';
import { catchError, Observable, of } from 'rxjs';
import {MatDialogModule} from '@angular/material/dialog';

@Component({
  selector: 'app-courses',
  standalone: false,
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent implements OnInit {

  courses$: Observable<Course[]>;
  displayedColumns = ['name','category'];

  constructor(private courseService: CoursesService) {
    this.courses$ = this.courseService.list().pipe(
      catchError(error =>{
          console.log(error)
          return of([])
        }
    )
    );
  }
  ngOnInit(): void {

  }
}
