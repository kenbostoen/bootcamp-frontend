import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'namePipe' })
export class NamePipe implements PipeTransform {
    transform(value: string): string {
        console.log('namepipe');
        if (value) {
            return value.substr(0, 1).toUpperCase() + value.substr(1).toLowerCase();
        }
        return '';
    }
}