import { of, from } from 'rxjs'

const observer = {
    next: (val: any) => console.log('next', val),
    complete: () => console.log('complete')
}

/**
 * Of => take a arguments and return a sequence
 * From => (array, promise, iterable, observable) from convert an observable
 */

// for(let _number in myIterableArray) {
//     console.log(_number);
// }


// Use array and this emit each value in array
// const source$ = from([1,2,3,4,5]);

//Emit the array with a one value
// const source$ = of([1,2,3,4,5]);

//Using spread operator change the behavior for each a elements in the array
// const source$ = of(...[1,2,3,4,5]);

// If you using a string this covert each char on the word in array
// const source$ = from('Giovanni');

// Subscribe for previous exercises
// source$.subscribe(observer);

// Using from for get a fetch request
// const source$ = from(fetch('https://api.github.com/users/klerith'));

// source$.subscribe(async response => {
//     // console.log(response);
//     const jResponse = await response.json();
//     console.log(jResponse);

// });

// Using generator functions
function* myGenerator() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
};

const myIterableArray = myGenerator();

from( myIterableArray ).subscribe( observer );



