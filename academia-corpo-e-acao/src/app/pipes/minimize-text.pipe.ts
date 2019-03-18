import { Pipe, PipeTransform } from '@angular/core';
import { isNullOrUndefined } from 'util';

@Pipe({name: 'minimizeText'})
export class MinimizeTextPipe implements PipeTransform {
  transform(value: string, size: number): string {
    
    if (!isNullOrUndefined(value) && value.length > size) {
        return value.substr(0, size-1) + '.';
    } else {
        return value;
    }
  }
}