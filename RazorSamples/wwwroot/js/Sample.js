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
        // $('#sample-data').bootstrapTable({
        //    url: url
        // });
        // $.get(url, function (data: SampleData[]) {
        //     console.log(data);
        // });
    };
    return SamplePage;
}());
$(document).ready(function () {
    var page = new SamplePage();
    page.loadData();
});
