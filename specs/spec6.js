describe('User Managment', function () {
    it('calculate', function () {


        browser.get('https:juliemr.github.io/protractor-demo/');
        element(by.model('first')).sendKeys('3');
        element(by.model('second')).sendKeys('7');
        element(by.id('gobutton')).click();


        //element(by.css("button[id='gobutton']")).click();
        //element(by.css("button[class='btn']")).click();

        element(by.repeater("result in memory")).element(by.css("td:nth-child(3)")).getText().then(function (result) {
            console.log(result);
        });
        // browser.sleep(20000);
        //tagname[attribute='value']
        //element(by.css('td[class="ng-binding"]')).getText().then(function(result){})
        /*element(by.css("h2[class='ng-binding']")).getText().then(function (result) {
     console.log(result);
})*/

        browser.sleep(10000);
    });
});