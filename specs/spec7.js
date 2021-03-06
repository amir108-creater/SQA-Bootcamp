//const { element } = require("protractor");

describe('testing', function () {
    it('Open protractor demo website', function () {


        browser.get('https://juliemr.github.io/protractor-demo/');

        element(by.model('first')).sendKeys('3');
        element(by.model('second')).sendKeys('7');

        element(by.model('operator')).click();

        //browser.sleep(5000);

        element(by.css('option[value="MULTIPLICATION"]')).click();

        element(by.id('gobutton')).click();

        /*element(by.repeater("result in memory")).element(by.css('option[value="MULTIPLICATION"]')).getText().then(function (result) {
            console.log(result);
        });*/
        element(by.repeater("result")).element(by.css("td:nth-child(3)")).getText().then(function (result) {
            console.log(result);
        });

        browser.sleep(10000);
    });
});