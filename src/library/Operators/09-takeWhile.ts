import { fromEvent } from 'rxjs';
import { map, takeWhile } from 'rxjs/operators';

fromEvent<MouseEvent>(document, 'click')
    .pipe(
        map(({ x, y }) => ({ x, y })),
        // End the emission of the values before last condition is true
        // takeWhile(({ y }) => y <= 150))
        // End the emission of the values including the last value after the condition is true
        takeWhile(({ y }) => y <= 150, true))
    .subscribe({
        next: val => console.log('next:', val),
        complete: () => console.log('complete')
    });