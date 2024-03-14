import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custompipe',
  standalone: true,
})
export class CustomPipe implements PipeTransform {
  transform(value: string, index: number): string {
    return `${value} - ${index}`;
  }
}
