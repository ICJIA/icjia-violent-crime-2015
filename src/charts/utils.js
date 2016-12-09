exports.cellFormat = function(tid) {
    let table = $('#' + tid + ' tbody');
    table.find('tr').each(function() {
        let $tds = $(this).find('td')
        let $t = $tds.html().toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
        $tds.html($t)
    });
}

// Core configuration object for Datatables
// See: https://legacy.datatables.net/ref#sDom

// Removes the search bar and pagination
exports.dtConfig = {

    "sDom": '<"top">rt<"bottom"><"clear">'
}