import { from } from 'rxjs';
import { filter, map, reduce, tap } from 'rxjs/operators';

const data = [1, 2, 'foo', 3, 5, 6, 'bar', 7, 8];

from(data)
    .pipe(
        filter<any>(value => {
            return !isNaN(value)
        }),
        reduce((acc: number, value: number) => (acc + value))
    )
    .subscribe(console.log)