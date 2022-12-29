import { from, fromEvent, of, range } from 'rxjs';
import { filter, map } from 'rxjs/operators';


// First sample demo using filter
// range(20, 10)
//     .pipe(filter(value => value % 2 === 1))
//     .subscribe(console.log);

// Second demo using a index whit a extra parameter
// range(20, 10)
//     .pipe(filter(value => {
//         console.log('Idx value', value);
//         return value % 2 === 1;
//     }))
//     .subscribe(console.log);


// Example with the filter and array of objects
// interface hero {
//     type: string;
//     name: string;
// }

// const heroList: hero[] = [
//     { type: 'Hero', name: 'Ironman' },
//     { type: 'Hero', name: 'Hulk' },
//     { type: 'Villain', name: 'Thanos' },
// ];

// from(heroList)
//     .pipe(filter(hero => hero.type === 'Hero'))
//     .subscribe(console.log)

fromEvent<KeyboardEvent>(document, 'keyup')
    .pipe(
        map(event => event.code),
        filter(key => key === 'Enter'))
    .subscribe(console.log);