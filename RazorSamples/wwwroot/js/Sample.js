"use strict";
var SamplePage = /** @class */ (function () {
    function SamplePage() {
        SamplePage.init();
    }
    SamplePage.init = function () {
        console.log('SamplePage.init()');
    };
    return SamplePage;
}());
new SamplePage();
