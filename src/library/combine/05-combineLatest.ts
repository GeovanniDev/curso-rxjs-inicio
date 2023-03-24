import { combineLatest, fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';

const txt_1 = document.createElement('input');
      txt_1.value = 'geo@mail.com';
      txt_1.type = 'text';
const txt_2 = document.createElement('input');
      txt_2.value = 'test';
      txt_2.type = 'password';

document.querySelector('body').append(txt_1,txt_2);

const getStreamInput = (control: HTMLElement) =>
    fromEvent<KeyboardEvent>(control, 'keyup')
        .pipe(
            map<any, string>(({ target: { value } }) => value)
        );

combineLatest([
    getStreamInput(txt_1),
    getStreamInput(txt_2)
]).subscribe(console.log)
