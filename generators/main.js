const work = () => {
    console.log('I am here');

    iterables();
};

function iterables () {
    let jane = { first: 'Jane', last: 'Doe' };
    for (let [key,value] of objectEntries(jane)) {
        console.log(`${key}: ${value}`);
    }
}

function *objectEntries(obj) {
        let propKeys = Reflect.ownKeys(obj);

        for (let propKey of propKeys) {
            // `yield` returns a value and then pauses
            // the generator. Later, execution continues
            // where it was previously paused.
            yield [propKey, obj[propKey]];
        }
}

document.addEventListener('DOMContentLoaded', work);
