import { from, fromEvent, tap } from 'rxjs';
import { first, map } from 'rxjs/operators';

fromEvent<any>(document, 'click')
    .pipe(
        tap<MouseEvent>(console.log),
        // map<MouseEvent, any>(event => ({ y: event.clientY, x: event.clientX })),
        map<MouseEvent, any>(({ clientX, clientY }) => ({ clientY, clientX })),
        first(result => result.clientY >= 150)
    )
    .subscribe({
        next: val => console.log('next:', val),
        complete: () => console.log('complete')
    })