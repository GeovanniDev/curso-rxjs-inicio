import { interval, Subject } from 'rxjs';
import { map, take } from 'rxjs/operators';


const reloj$ = interval(1000).pipe(
    take(5),
    map(val => Math.round(Math.random() * 100))
);


const subject$ = new Subject<number>();
const relojSubject$ = reloj$.subscribe(subject$);
subject$.subscribe( val => console.log('obs1', val) );
subject$.subscribe( val => console.log('obs2', val) );

setTimeout(() => {
    subject$.complete();
    relojSubject$.unsubscribe();
}, 6500);