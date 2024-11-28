import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category',
  standalone: false
})
export class CategoryPipe implements PipeTransform {

  transform(value: string): string {
    switch(value.toLowerCase()){
      case 'frontend': return 'code';
      case 'backend': return 'computer';
    }
    return 'code';
  }

}
