import { ajax, AjaxResponse } from 'rxjs/ajax';
import { catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';

const url = 'https://api.github.com/users?per_page=5';

ajax( url )
    .pipe(
        map(({ response }) => response),
        catchError(err => {
            console.warn('request error:', err);
            return of([])
        })

    )
    .subscribe(result => console.log('result:', result));
