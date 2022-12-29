import { range, fromEvent } from 'rxjs';
import { map, mapTo, pluck } from 'rxjs/operators'

//Using map with range number values
// range(1,5)
// .pipe(
//     map<number,string>(value => (value * 10).toString())
// )
// .subscribe(console.log);


// Using a map for filter a property in a complex object, the propose get a more filter information
const event$ = fromEvent<KeyboardEvent>(document, 'keyup')

event$
    .subscribe(val => console.log('all', val));
event$
    .pipe(map<KeyboardEvent, string>(event => event.code))
    .subscribe(val => console.log('map', val));
event$
    .pipe(pluck('target','baseURI'))
    .subscribe(val => console.log('pluck', val));;
event$
    .pipe(mapTo('push a key'))
    .subscribe(val => console.log('MapTo', val));

