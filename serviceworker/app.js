document.addEventListener('DOMContentLoaded', () => {
    navigator.serviceWorker.register('./sw.js')
             .then(start, error => console.log('failed'));
});

const start = () => {
    fetch('test').then((response) => console.log(response));
};
