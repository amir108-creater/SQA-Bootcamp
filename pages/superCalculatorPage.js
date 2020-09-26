function superCalculatorPage() {

    this.input1 = element(by.model('first'));
    this.input2 = element(by.model('second'));
    this.goButton = element(by.id('gobutton'));

    //this.repeatResults = element.all(by.repeater('result in memory'));

    this.countRows = function () {

        element.all(by.repeater('result in memory')).count().then(function (results) {
            console.log(results);
        });
    };

    this.loopAndAssert = function () {

        var sum = ['15', '12', '10'];
        var i = 0;

        element.all(by.repeater('result in memeory')).each(function (answer) {

            answer.element(by.css("td:nth-child(3)")).getText().then(function (result) {

                console.log(result);
                expect(result).toBe(sum[i]);
                i = i + 1;
            });
        });
    };

};

module.export = new superCalculatorPage();








/*describe('Users Management', function () {

    var obj = require("./spec13PageObject.js");

    it('Open Angularjs WEbsite', function () {

        function add(a, b) {


            obj.input1.sendKeys(a);
            obj.input2.sendKeys(b);
            obj.goButton.click();

        };

        browser.get('https://juliemr.github.io/protractor-demo/');



        add(3, 7);
        add(3, 9);
        add(9, 6);

        obj.repeatResults.count().then(function (result) {
            console.log(result);
        });

        var sum = ['15', '12', '10'];
        var i = 0;

        obj.repeatResults.each(function (answer) {

            answer.element(by.css("td:nth-child(3)")).getText().then(function (result) {

                console.log(result);
                expect(result).toBe(sum[i]);
                i = i + 1;
            });

        });











    });
});
*/