import { interval, tap } from 'rxjs';
import { map, reduce, take } from 'rxjs/operators';
const numbers = [1,2,3,4,5]

const totalReducer =
    (accumulator: number, current: number) => {
        console.log(accumulator, current);
        return accumulator + current
    };

const resultReduce = numbers.reduce(totalReducer, 0);

console.log('sample reduce',resultReduce);

interval(500)
    .pipe(
        take(5),
        tap(console.log),
        reduce(totalReducer, 10)
    )
    .subscribe(console.log);