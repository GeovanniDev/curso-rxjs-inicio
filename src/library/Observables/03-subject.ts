import { Observable, Observer, Subject  } from 'rxjs';

const observer: Observer<number> = {
    next: value  => console.log('Observer next:', value),
    error: err => console.warn('Observer error:', err),
    complete: () => console.log('Observer complete')
};


const interval$ = new Observable<number>(subs => {
    const myInterval = setInterval(() => subs.next(Math.random()) , 1000);

    return () => {
        clearInterval(myInterval);
        console.log('Interval Destroy');
    };
});

const subject$ = new Subject<number>();
const intervalSubject = interval$.subscribe(subject$);

const c1 = subject$.subscribe(observer);
const c2 = subject$.subscribe(observer);

setTimeout(() => {
    subject$.next(10);
    subject$.complete();
    intervalSubject.unsubscribe();
}, 3500);




