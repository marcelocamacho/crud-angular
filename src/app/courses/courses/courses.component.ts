import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';
import { CoursesService } from '../services/courses.service';
import { catchError, Observable, of } from 'rxjs';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { ErrorDialogComponent } from '../../shared/componenents/error-dialog/error-dialog.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  standalone: false,
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent implements OnInit {

  courses$: Observable<Course[]>;
  //displayedColumns = ['_id','name','category'];
  displayedColumns = ['name','category','actions'];

  constructor(
    private courseService: CoursesService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.courses$ = this.courseService.list().pipe(
      catchError(error =>{
        console.log(error);
        this.onError('Erro ao carregar os cursos');
          return of([])
        }
    )
    );
  }
  ngOnInit(): void {

  }
  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg,
    });
  }

  onAdd(){
    this.router.navigate(['new'],{relativeTo: this.route});
    //this.router.navigate(['courses/new']);
  }

}
