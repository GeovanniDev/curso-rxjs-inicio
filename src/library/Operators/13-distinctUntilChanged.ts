import { of, from, distinctUntilChanged } from 'rxjs';

of(1,'1',1,2,2,3,3,3,4,4,5,5,'1')
    .pipe(
        // This operator use === por made a comparative
        distinctUntilChanged()
    )
    .subscribe(console.log);

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
        distinctUntilChanged((after, before) => after.name === before.name))
    .subscribe(console.log)