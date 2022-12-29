import { asyncScheduler } from 'rxjs';

// setTimeout(() => { }, 1000);
// setInterval(() => { }, 1000);


// Works similar to time out
// const sendFunc = (name: string) => console.log(`Hello ${ name }`);
// asyncScheduler.schedule(sendFunc, 3000, 'Geo')

// Work similar to interval
const sub = asyncScheduler.schedule(function(state) {
    console.log('state', state);
    this.schedule( state + 1, 1000);
}, 3000, 1);

asyncScheduler.schedule(() => sub.unsubscribe(), 6000)