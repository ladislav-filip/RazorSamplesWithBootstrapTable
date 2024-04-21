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

        $.get(url, function (data) {
            console.log(data);
        });
    }
}

const page = new SamplePage();
page.loadData();
