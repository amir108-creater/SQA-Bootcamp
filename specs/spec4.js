const { browser, element } = require("protractor");

describe('User Management', function () {
    it('Open Angular Website', function () {


        browser.waitForAngularEnabled(false);

        browser.get('https://www.google.com/');

        browser.waitForAngularEnabled(true);

        browser.get('https://juliemr.github.io/protractor-demo/');
        browser.sleep(10000);

        element(by.model('first')).sendKeys('3');
        element(by.model('second')).sendKeys('7');

        element(by.id('gobutton')).click();
        //element(by.css("input[class='gLFyf.gsfi']")).sendKeys('hello').then(function () {

            element(by.css("button[class='gNO89b']")).click();
            browser.sleep(10000);
        });

    })
})
/*browser.get('https://www.google.com/');

element(by.css("searchtab[class='gNO89b']")).click();
browser.sleep(10000);
});
browser.waitForAngularEnable(true);

*/