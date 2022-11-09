import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'uah'
})
export class UAHPipe implements PipeTransform {

  transform(value: number, ...args: number[]): number {
    const [price] = args;
    return value * price;
  }

}
