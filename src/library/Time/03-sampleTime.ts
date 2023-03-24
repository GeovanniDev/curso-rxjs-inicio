import { fromEvent } from 'rxjs';
import { map, sampleTime } from 'rxjs/operators';

fromEvent<PointerEvent>(document, 'click')
    .pipe(
        sampleTime(2000),
        map(({ x, y }) => ({ x, y }))
    )
    .subscribe( console.log );