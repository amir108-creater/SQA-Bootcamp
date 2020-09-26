//not complete
const { element } = require("protractor");





element(by.model('second')).sendKeys('7');
element(by.id('gobutton')).click();

element(by.model('first')).sendKeys('8');
element(by.model('second')).sendKeys('9');
element(by.id('gobutton')).click();

element(by.model('first')).sendKeys('4');
element(by.model('second')).sendKeys('6');
element(by.id('gobutton')).click();

element.all(by.repeater('result in memory')).count().then(function(result){
    console.log(result);
});

element.all(by.repeater('result in memory')).each(function(answer){

    answer.element(by.css("td:nth-child(3)")).getText().then(function(result){

        console.log(result);

    });
})