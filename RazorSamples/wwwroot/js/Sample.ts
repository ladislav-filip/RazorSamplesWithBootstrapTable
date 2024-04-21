interface SampleData {
    id: number;
    name: string;
    surname: string;
}

class SamplePage {

    constructor() {
        SamplePage.init();
    }

    public static init() {
        console.log('SamplePage.init()');
    }

    public loadData() {
        console.log('SamplePage.loadData()');
        const url: string = $('#sample-api').val() as string;

        // $('#sample-data').bootstrapTable({
        //    url: url
        // });

        // $.get(url, function (data: SampleData[]) {
        //     console.log(data);
        // });
    }
}

$(document).ready(function () {
    const page = new SamplePage();
    page.loadData();
});
