import { fromEvent, interval, mergeMap, takeUntil, of } from 'rxjs';
import { map, take } from 'rxjs/operators';


of('a', 'b', 'c')
    .pipe(
        mergeMap(chart =>
            interval(1000)
                .pipe(
                    map(time => chart + ' ' + time),
                    take(3)
                )
            )
    )
    .subscribe(console.log)


// Example using events
// fromEvent(document, 'mousedown')
//     .pipe(
//         mergeMap(() =>
//             interval()
//                 .pipe(
//                     takeUntil(fromEvent(document, 'mouseup'))
//                 )
//             )
//     )
//     .subscribe(console.log)