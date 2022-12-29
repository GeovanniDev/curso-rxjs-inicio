import { of, range, asyncScheduler  } from 'rxjs';

// Using of for simple arrays
// const src1$ = of(1,2,3,4,5);

// Using range with synchronous values
// const src1$ = range(1,5);

// Using range with asynchronous values
const src1$ = range(1,5, asyncScheduler);


console.log('start');
src1$.subscribe( console.log )
console.log('end');