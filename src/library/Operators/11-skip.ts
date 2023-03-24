import { fromEvent, interval, skip, takeUntil, tap } from 'rxjs';

const btnStop = document.createElement('button');
btnStop.innerHTML = 'Stop Timer'

document.querySelector('body').append(btnStop);

const onClick_btnStop$ = fromEvent(btnStop, 'click')
    .pipe(
        tap(() => console.log('tap before skip')),
        skip(1),
        tap(() => console.log('tap after skip')),
    );
interval(1000)
    .pipe(
        takeUntil(onClick_btnStop$))
    .subscribe({
        next: value => console.log(value),
        complete: () => console.log('complete')
    })

