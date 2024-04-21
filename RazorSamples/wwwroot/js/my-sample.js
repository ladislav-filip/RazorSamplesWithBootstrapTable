$(document).ready(function() {
    $('#sample-data').bootstrapTable({
        url: '/api/sample', // URL JSON souboru s daty
        pagination: true, // Povolit stránkování
        pageSize: 10, // Počet řádků na stránku
        pageList: [10, 25, 50], // Seznam dostupných velikostí stránek
        columns: [{
            field: 'id',
            title: 'Name'
        }, {
            field: 'name',
            title: 'Name'
        }, {
            field: 'surname',
            title: 'Surname'
        }]
    });
});
