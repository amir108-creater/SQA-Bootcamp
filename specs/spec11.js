describe('User Managment', function () {

    function add(a, b, o) {

        Element(by.model('first')).sendKeys(a);
        element(by.model('second')).sendKeys(b);

        element.all(by.tagname('option')).each(function (result) {

            result.getAttribute('value').then(function (values) {

                if (values == o) {
                    result.click();
                }
            });


        });
        element(by.buttonText('Go!')).click();
    };
    it('Open Angular Website'), function () {

    }
})