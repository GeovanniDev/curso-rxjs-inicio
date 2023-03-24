import { interval, fromEvent, sample } from 'rxjs';

interval(500)
    .pipe(
        sample(fromEvent(document, 'click'))
    )
    .subscribe(console.log)

