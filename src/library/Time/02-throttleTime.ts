import { fromEvent, distinctUntilChanged, asyncScheduler } from 'rxjs';
import { map, throttleTime } from 'rxjs/operators';

// Example 1
fromEvent(document, 'click')
    .pipe(
        // Made a delay after each emission on the observable
        throttleTime(3000)
    )
    .subscribe(console.log);

// Example 2
const txtInput = document.createElement('input');
                 document.querySelector('body').append(txtInput);


fromEvent(txtInput, 'keyup')
    .pipe(
         map((value: any) => value.target.value),
         throttleTime(1000, asyncScheduler, {
            leading: false,
            trailing: true
         }),
         distinctUntilChanged()

    )
    .subscribe(console.log);