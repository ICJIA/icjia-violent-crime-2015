exports.cellFormat = function(tid) {
    let table = $('#' + tid + ' tbody');
    table.find('tr').each(function() {
        let $tds = $(this).find('td')
        let $t = $tds.html().toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
        $tds.html($t)
    });
}