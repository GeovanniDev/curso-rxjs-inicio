import { interval, timer  } from 'rxjs';

const observer =  {
    next: value => console.log('next:', value),
    complete: () => console.log('complete')
}

const interval$ = interval(1000);


// Simple timer for each two seconds
// const timer$ = timer(2000);

// Timer using specific date

const schedulerDate = new Date();
schedulerDate.setSeconds( schedulerDate.getSeconds() + 5 );
const timer$ = timer(schedulerDate);



console.log('start');
// infinity loop
// interval$.subscribe(observer);
// determinate loop
timer$.subscribe(observer);
console.log('end');