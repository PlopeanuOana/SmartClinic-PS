
$(document).ready( function () {
    $('#dt-basic-checkbox').DataTable({
    columnDefs: [{
    orderable: false,
    className: 'select-checkbox',
    targets: 0
    }],
    select: {
    style: 'os',
    selector: 'td:first-child'
    }
    });
} );

