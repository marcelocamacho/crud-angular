import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category',
  standalone: false
})
export class CategoryPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
