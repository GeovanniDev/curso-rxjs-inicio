import { of, take, tap } from 'rxjs';

of(1,2,3,4,5)
    .pipe(
        tap( console.log ),
        take(3)
    )
    .subscribe({
        next: val => console.log('val:', val),
        complete: () => console.log('complete')
    })
