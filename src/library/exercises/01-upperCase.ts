import { from } from 'rxjs';
import { map } from 'rxjs/operators';

const names = ['batman', 'joker', 'doble cara', 'pingüino', 'hiedra venenosa'];
const upperCase = (name: string) => name.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());


from(names)
    .pipe(
        map(upperCase)
    )
    .subscribe(console.log);

