import { endWith, of, startWith } from 'rxjs';

of(1,2,3)
    .pipe(
        startWith('a', 'b', 'c'),
        endWith('x', 'y', 'z')
    )
    .subscribe(console.log)