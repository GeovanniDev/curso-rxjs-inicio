import { debounceTime, fromEvent, distinctUntilChanged } from 'rxjs';
import { map } from 'rxjs/operators';

// Example 1
fromEvent(document, 'click')
    .pipe(
        // Made a delay in emission on the observable
        debounceTime(3000)
    )
    .subscribe(console.log);

// Example 2
const txtInput = document.createElement('input');
                 document.querySelector('body').append(txtInput);


fromEvent(txtInput, 'keyup')
    .pipe(
         map((value: any) => value.target.value),
         debounceTime(1000),
         distinctUntilChanged()

    )
    .subscribe(console.log);