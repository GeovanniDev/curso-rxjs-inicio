import { of, zip } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map, mergeAll, switchMap } from 'rxjs/operators';

const SW_API = 'https://swapi.dev/api';
const getRequest = ( url: string ) => ajax.getJSON<any>(url);

// My response
// zip(
//     getRequest(`${ SW_API }/people/1/`)
//         .pipe(
//             map(( { starships } ) => ajax.getJSON(starships[0])),
//             mergeAll()
//         ),
//     getRequest(`${ SW_API }/people/1/`)
// ).pipe(
//     map(([ r1, r2 ]) => ({ nave: r1, personaje: r2 }))
// )
//     .subscribe(console.log);

// Short code
getRequest(`${ SW_API }/people/1/`)
    .pipe(
        switchMap(response => zip(of(response),getRequest(response.starships[0]))),
        map(([ r1, r2 ]) => ({ nave: r1, personaje: r2 }))
    )
    .subscribe(console.log)
