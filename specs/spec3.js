describe('User Managment', function () {
    it('calculate', function () {


        browser.get('https:juliemr.github.io/protractor-demo/');
        
        element(by.model('first')).sendKeys('3');
        element(by.model('second')).sendKeys('7');
        element(by.id('gobutton')).click();


        //element(by.css("button[id='gobutton']")).click();
        //element(by.css("button[class='btn']")).click();


        // browser.sleep(20000);
        //tagname[attribute='value']
        //element(by.css("h2[class='ng-binding']")).getText().then(function (result) {
        //    console.log(result);
        //})
        // (wrong way) -> console.log(element(by.css("h2[class='ng-binding']")).getText());
        element(by.css("h2[class='ng-binding']")).getText().then(function(result){
            
            console.log(result);
        })
        expect(element(by.css("h2[class='ng-binding']")).getText()).toBe("18");

        browser.sleep(10000);
    });
});