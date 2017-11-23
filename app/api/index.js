import {
    API_URL
} from '../config';

export const login = data => {
    return fetch(
            API_URL + 'login', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            })
        .then(response => response.json());
};
