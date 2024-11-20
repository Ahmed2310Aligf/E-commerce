import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditCardFormat',
  standalone: true
})
export class CreditCardFormatPipe implements PipeTransform {

  transform(value: string): string {

    if(value.length==16){
    let card = [];

    for (let i = 0; i < value.length; i += 4) {
      card.push(value.substring(i, i+4));
      // console.log(card);

    }

    return card.join('–');

  }
  return "must be 16 numbers"
}
}
