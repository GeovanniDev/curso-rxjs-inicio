import { from } from 'rxjs';
import { reduce, scan, map } from 'rxjs/operators';
import { isAccessor } from 'typescript';

const numbers = [1, 2, 3, 4, 5];
const totalReduce = (acc: number, cur: number) => acc + cur;

// Example with reduce - Emit the result in the end of the loop collection
from(numbers)
    .pipe(
        reduce(totalReduce, 0))
    .subscribe(value => console.log('reduce:', value));

// Example with scan - Emit the result each time to observable emit a value
from(numbers)
    .pipe(
        scan(totalReduce, 0))
    .subscribe(value => console.log('scan:', value));

interface user {
    id?: string;
    isAuthenticated?: boolean;
    token?: string;
    age?: number;
}

const users: user[] = [
    { id: 'gio', isAuthenticated: false, token: null },
    { id: 'gio', isAuthenticated: true, token: '125ght' },
    { id: 'gio', isAuthenticated: true, token: '128ñlr' },
]

from(users)
    .pipe(
        scan<user, user>((acc: user, cur: user) => { return { ...acc, ...cur } }, { age: 32 }),
        map(user => user.token))
    .subscribe(console.log)
