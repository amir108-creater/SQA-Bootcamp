//const object = require("./object");

describe('Super Calculator Screen', function () {

    var superCalculatorPage = require("./superCalculatorPage.js");

    it('Addition Testing and Assertion', function () {

        function add(a, b) {

            superCalculatorPage.input1sendKeys(a);
            obj.input2.sendKeys(b);
            obj.goButton.click();

            /* element(by.model('first')).sendKeys(a);
             element(by.model('second')).sendKeys(b);
             element(by.id('gobutton')).click();*/

        };

        browser.get('https://juliemr.github.io/protractor-demo/');



        add(3, 7);
        add(3, 9);
        add(9, 6);

        obj.countRows();

        obj.loopAndAssert();

        /*    element.all(by.repeater('result in memory')).count().then(function (result) {
                console.log(result);
            });*/

        //var b = ["10", "12", "15"];



        /* element.all(by.repeater('result in memory')).each(function (answer) {
 
             for (var i = 1; i < b.length; i++) {
 
                 expect(answer.element(by.css("td:nth-child(3)")).getText()).toBe(b[i]);
 
 
             }
 
         });*/


    });

    it()
});