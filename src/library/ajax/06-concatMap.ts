import { concatMap, fromEvent, interval } from 'rxjs';
import { take } from 'rxjs/operators';

// Made a union with all observables that emit the source and alway hold on the continue
fromEvent(document, 'click')
    .pipe(
        concatMap(() => interval(1000)
            .pipe(take(3))
        ))
    .subscribe(console.log)