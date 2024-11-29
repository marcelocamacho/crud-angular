import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CoursesService } from '../services/courses.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-course-form',
  standalone: false,
  templateUrl: './course-form.component.html',
  styleUrl: './course-form.component.scss'
})
export class CourseFormComponent implements OnInit {

  //form: FormGroup;
  form = this.formBuilder.group({
    name: [''],
    category: ['']
  });
  constructor(
    private formBuilder: FormBuilder,
    private service: CoursesService,
    private _snackBar: MatSnackBar,
    private location: Location,
    private router: Router
  ){
    // this.form = this.formBuilder.group({
    //   name: [''],
    //   category: ['']
    // });
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
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
