import { merge, fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';

merge(
    fromEvent(document, 'keyup').pipe(map(({ type }) => type )),
    fromEvent(document, 'click').pipe(map(({ type }) => type ))
).subscribe(console.log)