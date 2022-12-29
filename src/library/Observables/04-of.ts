import { of } from 'rxjs';

// const obs$ = of(1,2,3,4,5,6,7);
const obs$ = of(...[1,2,3,4],1,2,3,4,5,6,7);
// const obs$ = of([1,2], { name: 'Text' }, function() {}, true, Promise.resolve(false));


console.log('start obs$');
obs$.subscribe(
    next => console.log('next:', next),
    null,
    () => console.log('end sequence'));
console.log('end obs$');