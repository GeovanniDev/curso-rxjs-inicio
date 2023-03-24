import { concatMap, fromEvent, interval } from 'rxjs';
import { exhaustMap, take } from 'rxjs/operators';

// If a new observable emit and in that moment exist a observable this don't emit a value after the current finish
fromEvent(document, 'click')
    .pipe(
        exhaustMap(() => interval(1000)
            .pipe(take(3))
        ))
    .subscribe(console.log)