import { fromEvent, tap } from 'rxjs';
import { auditTime, map } from 'rxjs/operators';


fromEvent<PointerEvent>(document, 'click')
    .pipe(
        map(({ x }) => x),
        tap(value => console.log('tap:', value)),
        auditTime(2000)
    )
    .subscribe(console.log)