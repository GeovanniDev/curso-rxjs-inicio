import { fromEvent, mergeMap, of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map, tap, catchError, switchMap, exhaustMap } from 'rxjs/operators';


// create a elements

const form = document.createElement('form');
const space1 = document.createElement('br');
const space2 = document.createElement('br');
const txtUser = document.createElement('input')
    txtUser.type = 'email';
    txtUser.placeholder = 'email';
    txtUser.value = 'eve.holt@reqres.in';
const txtPass = document.createElement('input')
    txtPass.type = 'password';
    txtPass.placeholder = 'password';
    txtPass.value = 'cityslicka';
const bntSend = document.createElement('button');
    bntSend.innerText = 'Login';

form.append(txtUser, space1, txtPass, space2, bntSend)
document.querySelector('body').append(form);

const sendRequest = (payLoad) =>
    ajax.post('https://reqres.in/api/login?delay=1', payLoad)
    .pipe(
        map<any, any>(({ response: { token } }) => token),
        catchError(() => of(''))
    );


fromEvent(form, 'submit')
    .pipe(
        tap(event => event.preventDefault()),
        map((sub) => ({
            email: sub.target[0].value,
            password: sub.target[1].value
        })),
        // All request is sending to API (each submit in the form)
        // mergeMap(sendRequest),
        // Send only the last submit to API (cancel the previous request)
        // switchMap(sendRequest)
        // Send only the last request to made in the submit
        exhaustMap(sendRequest)

    )
    .subscribe(console.log)




