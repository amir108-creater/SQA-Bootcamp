const { browser } = require('protractor');
var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config = {

    seleniumAddress: 'http://localhost:4444/wd/hub', // (when it is not defined, Selenium clou)
    //   capabilities: {
    //      browserName: 'internet explorer',
    //  },

    onPrepare: function () {
        browser.driver.manage().window().maximize();
        Jasmine.getEnv().addReporter(
            new Jasmine2HtmlReporter({
                savePath: '../reports',
                cleanDestination: false,
                fileName: 'Trinity-Happy-Path-Test'

            })
        
    };

    specs: ['spec13.js']
};

}





















exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['spec13.js']
};



