import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CoursesService } from '../services/courses.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-course-form',
  standalone: false,
  templateUrl: './course-form.component.html',
  styleUrl: './course-form.component.scss'
})
export class CourseFormComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private service: CoursesService,
    private _snackBar: MatSnackBar
  ){
    this.form = this.formBuilder.group({
      name: [null],
      category: [null]
    });
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onSubmit(){
    this.service.save(this.form.value).subscribe({
      next: (result) => console.log(result),
      error : () => this.openSnackBar("Erro ao salvar o curso","Ok")
    }
    );
  }

  onCancel(){
    this.form.reset;
  }

  openSnackBar(message: string, action: string){
    this._snackBar.open(message,action,{duration: 5000});
  }

}
