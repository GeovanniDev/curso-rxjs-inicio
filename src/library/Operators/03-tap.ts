import { map, range, tap } from 'rxjs';

range(1,5)
    .pipe(
        tap(value => console.log('before', value)),
        map(value => value * 10),
        tap({
            next: value => console.log('after', value),
            complete: () => console.log('end sequence')
        }))
    .subscribe(result => console.log('sub', result));