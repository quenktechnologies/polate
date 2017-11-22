import 'mocha';
import * as must from 'must/register';
import polate from 'polate';

describe('polate', function() {

    it('interpolates a string', function() {

        must(polate('My name is {name}', { name: 'Kissoon' })).be('My name is Kissoon');

    });

    it('handles dot notation', function() {

        must(polate('My name is {user.name.first}.', { user: { name: { first: 'Oz', last: 'Pu' } } })).
            be('My name is Oz.');

    });

    it('handles multi line strings', function() {

        must(polate(`This string is about {n} characters long
     maybe not so much but {you} get the point right?
     It's ok if you don't, this is kind of nonsense
     but it {end}`, { n: 1e7, you: 'he', end: 'the end' }))
            .eql(`This string is about 10000000 characters long
     maybe not so much but he get the point right?
     It's ok if you don't, this is kind of nonsense
     but it the end`);

    });

    it('is able to apply functions', function() {

      must(polate(`1 + 1 is {result}.`, {result: ()=> 1 + 1}, {applyFunctions: true}))
      .be(`1 + 1 is 2.`);
      
    });


});

