exports.cellFormat = function(tid) {
    var table = $('#' + tid + ' tbody');

    table.find('tr').each(function(i) {
        var $tds = $(this).find('td')
        var $tmp = $tds.html().toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
        $tds.html($tmp)
    });
}