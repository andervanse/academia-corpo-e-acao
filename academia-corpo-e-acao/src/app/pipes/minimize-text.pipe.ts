import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'minimizeText'})
export class MinimizeTextPipe implements PipeTransform {
  transform(value: string, size: number): string {
    if (value && value.length > size) {
        return value.substr(0, size-3) + '...';
      }
  }
}