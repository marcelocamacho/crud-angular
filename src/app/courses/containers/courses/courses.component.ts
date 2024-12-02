import { Component, OnInit } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from '../../model/course';
import { CoursesService } from '../../services/courses.service';
import { ErrorDialogComponent } from '../../../shared/componenents/error-dialog/error-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-courses',
  standalone: false,
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent implements OnInit {

  courses$: Observable<Course[]> | null = null;
  //displayedColumns = ['_id','name','category'];
  displayedColumns = ['name','category','actions'];

  constructor(
    private courseService: CoursesService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar
  ) {
    this.refresh();
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

  onEdit(course: Course){
    this.router.navigate(['edit', course._id],{relativeTo: this.route});
  }

  refresh(){
    this.courses$ = this.courseService.list().pipe(
      catchError(error =>{
        console.log(error);
        this.onError('Erro ao carregar os cursos');
          return of([])
        }
    )
    );
  }

  onRemove(course: Course){
    this.courseService.delete(course._id).subscribe(
      () => {
        this.refresh();
        this.snackBar.open('Curso removido com sucesso!', 'X',{
          duration: 5000,
          verticalPosition: 'top',
          horizontalPosition:'center'
        });
      },
      error => this.onError('Erro ao tentar remover curso')
    );

  }

}
