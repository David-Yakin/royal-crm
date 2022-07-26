import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textCapital',
})
export class TextCapitalPipe implements PipeTransform {
  transform(text: string): string {
    const trimmed = text.trim();
    return (
      trimmed.charAt(0).toUpperCase() + trimmed.slice(1).toLocaleLowerCase()
    );
  }
}
