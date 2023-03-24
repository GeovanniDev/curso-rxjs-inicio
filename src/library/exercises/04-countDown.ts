import { interval } from 'rxjs';
import { take, map } from 'rxjs/operators';

const inicio = 7;
interval(700)
    .pipe(
        map(value => inicio - value),
        take(7)
    )
    .subscribe( console.log );




