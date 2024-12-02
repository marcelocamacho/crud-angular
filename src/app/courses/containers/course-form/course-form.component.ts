import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesService } from '../../services/courses.service';
import { Course } from '../../model/course';


@Component({
  selector: 'app-course-form',
  standalone: false,
  templateUrl: './course-form.component.html',
  styleUrl: './course-form.component.scss'
})
export class CourseFormComponent implements OnInit {

  //form: FormGroup;
  form = this.formBuilder.group({
    _id:[''],
    name: [''],
    category: ['']
  });
  constructor(
    private formBuilder: NonNullableFormBuilder,
    private service: CoursesService,
    private _snackBar: MatSnackBar,
    private location: Location,
    private router: Router,
    private activateRoute: ActivatedRoute
  ){
    // this.form = this.formBuilder.group({
    //   name: [''],
    //   category: ['']
    // });
  }

  ngOnInit(): void {
    const course: Course = this.activateRoute.snapshot.data['course'];
    this.form.setValue({
      _id:course._id,
      name: course.name,
      category: course.category
    });
  }

  onSubmit(){
    this.service.save(this.form.value).subscribe({
      next: (result) => {
        this.openSnackBar("Curso "+result.name+" cadastrado com sucesso","Ok");
        this.router.navigate(['courses']);
      },
      error : () => this.openSnackBar("Erro ao salvar o curso","Ok")
    }
    );
  }

  onCancel(){
    this.form.reset;
    this.location.back();
  }

  openSnackBar(message: string, action: string){
    this._snackBar.open(message,action,{duration: 5000});
  }

}
