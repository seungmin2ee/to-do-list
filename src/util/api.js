const BASE_URL = 'http://localhost:3000/';

export const fetchCreate = (url, data) => {
    fetch(url, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    })
    .then(() => {
        window.location.href = BASE_URL;
    })
    .catch(err => console.log(err.message));
}

export const fetchDelete = (url) => {
    fetch(url, {
        method: 'DELETE',
    })
    .then(() => {
        window.location.href = BASE_URL;
    })
    .then(err => console.log(err.message));
}

export const fetchPatch = (url, data) => {
    fetch(url,{
        method: 'PATCH',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    })
    .then(() => {
        window.location.href = BASE_URL;
    })
    .catch(err => console.log(err.message));
}