"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jquery_1 = __importDefault(require("jquery"));
require("bootstrap");
require("bootstrap-table");
var SamplePage = /** @class */ (function () {
    function SamplePage() {
        SamplePage.init();
    }
    SamplePage.init = function () {
        console.log('SamplePage.init()');
    };
    SamplePage.prototype.loadData = function () {
        console.log('SamplePage.loadData()');
        var url = (0, jquery_1.default)('#sample-api').val();
        (0, jquery_1.default)('#sample-data').bootstrapTable({
            url: url
        });
        // $.get(url, function (data: SampleData[]) {
        //     console.log(data);
        // });
    };
    return SamplePage;
}());
(0, jquery_1.default)(document).ready(function () {
    var page = new SamplePage();
    page.loadData();
});
