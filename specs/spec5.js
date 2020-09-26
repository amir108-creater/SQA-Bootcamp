describe('User Managment', function () {
    it('Open Angular Website', function () {

        browser.waitForAngularEnabled(false);

        browser.get('https://www.google.com/');

        element(by.name("q")).sendKeys('Angular website');
        browser.sleep(10000);
        element(by.css("input[class='gNO89b']")).click();

        browser.sleep(10000);

    });
});