import { concat, interval, of, take } from 'rxjs';

concat(
    interval(1000).pipe(take(3)),
    interval(1000).pipe(take(2)),
    of('a','b')
).subscribe(console.log);