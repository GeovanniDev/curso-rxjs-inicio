import { fromEvent } from 'rxjs';

const src1$ = fromEvent<PointerEvent>(document, 'click');
const src2$ = fromEvent<KeyboardEvent>(document, 'keyup');

// Generic type
// src1$.subscribe(event => console.log(event));
// src2$.subscribe(event => console.log(event));

// Using Types
 src1$.subscribe(({x, y}) => console.log(x,y));
 src2$.subscribe(({ key }) => console.log(key));