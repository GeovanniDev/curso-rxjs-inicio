import { fromEvent, interval, takeUntil } from 'rxjs';

const btnStop = document.createElement('button');
btnStop.innerHTML = 'Stop Timer'

document.querySelector('body').append(btnStop);

const onClick_btnStop$ = fromEvent(btnStop, 'click');
interval(1000)
    .pipe(
        takeUntil(onClick_btnStop$))
    .subscribe({
        next: value => console.log(value),
        complete: () => console.log('complete')
    })

