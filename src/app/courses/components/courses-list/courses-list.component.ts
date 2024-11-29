import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Course } from '../../model/course';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-courses-list',
  standalone: false,

  templateUrl: './courses-list.component.html',
  styleUrl: './courses-list.component.scss'
})
export class CoursesListComponent implements OnInit{

  @Input() courses: Course[] = [];
  @Output() add = new EventEmitter(false);
  displayedColumns = ['name','category','actions'];


  constructor(
    private router: Router,
    private route: ActivatedRoute
  ){}

  ngOnInit(): void {

  }

  onAdd(){
    this.add.emit(true);
    //this.router.navigate(['new'],{relativeTo: this.route});
    //this.router.navigate(['courses/new']);
  }
}
