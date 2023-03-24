import {  from, distinctUntilKeyChanged } from 'rxjs';
interface hero {
    name: string;
}

from([
    { name: 'P1' },
    { name: 'P2' },
    { name: 'P1' },
    { name: 'P4' },
    { name: 'P5' },
    { name: 'P5' },
    { name: 'P6' }])
    .pipe(
        distinctUntilKeyChanged('name'))
    .subscribe(console.log)