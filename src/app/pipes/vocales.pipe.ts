import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vocales'
})
export class VocalesPipe implements PipeTransform {

  transform(value: string,): string {

    return value.split('').map(leter => leter
      .replace('a', '1')
      .replace('e', '2')
      .replace('i', '3')
      .replace('o', '4')
      .replace('u', '5')).join('');
  }
}
