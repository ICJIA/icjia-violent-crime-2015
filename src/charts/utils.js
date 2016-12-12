// exports.cellFormat = function(tid) {
//     let table = $('#' + tid + ' tbody');
//     table.find('tr').each(function() {
//         let $tds = $(this).find('td')
//         let $t = $tds.html().toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
//         $tds.html($t)
//     });
// }

// Core configuration object for Datatables
// See: https://legacy.datatables.net/ref#sDom

// Removes the search bar and pagination
exports.dtConfig = {
    "columnDefs": [{
        "targets": '_all',
        "createdCell": function(td, cellData, rowData, row, col) {
            // Add commas to large numbers
            $(td).html($(td).html().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,"))
        }
    }],
    "sDom": '<"top">rt<"bottom"><"clear">'
}