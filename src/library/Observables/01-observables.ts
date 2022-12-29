import { Observable, Observer  } from 'rxjs';


const observer: Observer<string> = {
    next: value  => console.log('Observer next:', value),
    error: err => console.warn(err),
    complete: () => console.log('complete from observer')
};
const obs$ = new Observable<string>(subs => {
    subs.next('Hello');
    subs.next('Word');
    subs.next('Hello');
    subs.next('Word');
    subs.next('Hello');
    subs.next('Word');

    subs.complete();

    subs.next('Hello');
    subs.next('Word');

});

// First simple form for consume observable
// obs$.subscribe(console.log)

// Second form using internal methods
// obs$.subscribe(
//     (value: string) => console.log('next:', value),
//     error => console.warn(error),
//     () => console.log('complete'));

// third form library
obs$.subscribe(observer);