import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertToKhr'
})
export class ConvertToKhrPipe implements PipeTransform {

  transform(value: any): String {
    let Result = value * 4100;
    return Result.toLocaleString();
  }

}
