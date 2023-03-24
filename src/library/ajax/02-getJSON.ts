import { ajax, AjaxResponse } from 'rxjs/ajax';
import { catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';

const url = 'https://httpbin.org/delay/1';

ajax.getJSON(url, {
        'Content-Type': 'application/json',
        'private-token': '825ddf_g'
    })
    .subscribe(result => console.log('result', result));