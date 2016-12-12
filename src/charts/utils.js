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


exports.renderTable = function(hc, tableId) {
    let series = '<th></th>'
    let row = '<tr>';
    let tSeries = '';
    // read chart data --> convert to table
    for (let i = 0; i < hc.series.length; i++) {
        series = series + `<th> ${hc.series[i].name}</th>`
    }
    for (let i = 0; i < hc.series[0].data.length; i++) {
        row = row + `<td class="strong">${hc.xAxis.categories[i]}</td>`
        for (let j = 0; j < hc.series.length; j++) {
            // add comma to large numbers
            let tmp = hc.series[j].data[i]
            row = row + `<td> ${tmp} </td>`
        }
        row = row + `</tr>`
    }

    let hcTable = ''
    return hcTable = `
                            <table id="${tableId}" class="ordered striped">
                                <thead>
                                    <tr>
                                        ${series}
                                    </tr>
                                </thead>
                                    <tbody>
                                    ${row}
                                    </tbody>
                            </table> `


}

exports.guid = function() {
    // generate unique id
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    return s4() + s4() + s4() + s4() + s4() + s4();
}