const { element } = require("protractor");

describe('testing', function () {
    it('whatever', function () {


        browser.get('https://angularjs.org/');

        browser.get('https:juliemr.github.io/protractor-demo/').then(function () {

            //code to be run after then
            console.log('I am the most wonderful person on planet earth!');
        });

        //browser.sleep(10000);

        element(by.model('first')).sendKeys('10');
        //element(by.model('first')).sendkeys('10');

    });
});