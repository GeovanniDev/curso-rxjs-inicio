import { fromEvent, debounceTime, tap, Observable } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map, mergeAll } from 'rxjs/operators';
import { GitHubUser } from '../../library/interfaces/github-user.interface';
import { GitHubUsersResponse } from '../../library/interfaces/github-users.interface';

// Elements
const input = document.createElement('input');
const ol = document.createElement('ol');
document.querySelector('body').append(input, ol);

const buildResult = (users: GitHubUser[]) => {
    ol.innerHTML = '';

    for (const user of users) {
        const li = document.createElement('li');
        const img = document.createElement('img');
        const link = document.createElement('a');

        img.src = user.avatar_url;
        link.href = user.html_url;
        link.text = 'Go Page';
        link.target = '_blank';
        li.append(img, ` ${user.login} `, link);
        ol.append(li);
    }
}

fromEvent<KeyboardEvent>(input, 'keyup')
    .pipe(
        debounceTime(500),
        map<any, Observable<GitHubUsersResponse>>(({ target: { value } }) => ajax.getJSON(`https://api.github.com/search/users?q=${value}`)),
        mergeAll(),
        map<GitHubUsersResponse, GitHubUser[]>(({ items }) => items)
    )
    .subscribe(buildResult)


