const chalk = require('chalk');
const cfg = require('./configuration');

const printDate = () => {

};

(async () => {
    try {
        const names = ['arthur', 'nat', 'tom'];
        console.log(names);
        console.table(names);

        const myStuff = {
            thingOne: 'The First Thing',
            aNumber: 10,
            aList: ['one', 'two']
        };

        myStuff.anotherThing = 'Something Else';

        myStuff.oneMore = (x) => {console.log(`I\'m a function! ${x}`);};

        console.log(typeof myStuff);
        console.log(myStuff);

        myStuff.oneMore('Hi!');

        console.log(Object.keys(myStuff));

    } catch (error) {
        console.error(error.message);
    }
})();