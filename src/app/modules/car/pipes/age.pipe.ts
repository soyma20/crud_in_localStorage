import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    if (value === 2022) return 'not'
    return `${2022 - value} years` ;
  }

}
