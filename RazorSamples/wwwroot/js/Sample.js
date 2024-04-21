"use strict";
var SamplePage = /** @class */ (function () {
    function SamplePage() {
        SamplePage.init();
    }
    SamplePage.init = function () {
        console.log('SamplePage.init()');
    };
    SamplePage.prototype.loadData = function () {
        console.log('SamplePage.loadData()');
        var url = $('#sample-api').val();
        $.get(url, function (data) {
            console.log(data);
        });
    };
    return SamplePage;
}());
var page = new SamplePage();
page.loadData();
