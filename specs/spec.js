describe('Test suite', function () {
    it('open angularjs website', function () {
        browser.get('https://angularjs.org');
        //browsersleep(10000)
        browser.get('https://juliemr.github.io/protractor-demo/');


        //console.log(element(by.id()));  
        //console.log('Hello my name is Amir!');
        element(by.css("h2[class='ng-binding']")).getText().then(function (result) {
            console.log(result);
        });

    });
});