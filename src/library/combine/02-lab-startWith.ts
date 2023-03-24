import { ajax } from 'rxjs/ajax';
import { startWith } from 'rxjs';

const loadingDiv = document.createElement('div');
      loadingDiv.classList.add('loading');
      loadingDiv.innerHTML = 'Loading...';

const body = document
                .querySelector('body');

ajax.getJSON('https://reqres.in/api/users/2?delay=5')
    .pipe(
        startWith(true)
    )
    .subscribe(response => {
        if (response === true) {
            body.append(loadingDiv)
        } else {
            body.querySelector('.loading').remove();
        }
    })


