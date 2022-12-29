import { Observable, Observer  } from 'rxjs';

const observer: Observer<number> = {
    next: value  => console.log('Observer next:', value),
    error: err => console.warn('Observer error:', err),
    complete: () => console.log('Observer complete')
};


const interval$ = new Observable<number>(subs => {
    let number = 0;
    const myInterval = setInterval(() => {
        subs.next(number++);
        console.log(number);
    } , 1000);

    setTimeout(() => subs.complete(), 2500);

    return () => {
        clearInterval(myInterval);
        console.log('interval destroy');
    }
});

const sub1  = interval$.subscribe(observer);
const sub2  = interval$.subscribe(observer);
const sub3  = interval$.subscribe(observer);

sub1.add(sub2.add(sub3));

setTimeout(() => {
    sub1.unsubscribe();
    // sub2.unsubscribe();
    // sub3.unsubscribe();

    console.log('TimeOut Finish');
}, 3000);