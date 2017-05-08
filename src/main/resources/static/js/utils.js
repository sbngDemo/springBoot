$(document).ready(function() {
	var table = $('#example').DataTable({
		"scrollY" : "200px",
		"paging" : false
	});

	$('a.toggle-vis').on('click', function(e) {
		e.preventDefault();

		// Get the column API object
		var column = table.column($(this).attr('data-column'));

		// Toggle the visibility
		column.visible(!column.visible());
	});
});

function selBulkActions(frm) {
	document.getElementById('bulkAct').options[0].selected = 'selected';
    var checkBoxes = frm.elements['notificationCheckbox'];
      for (i = 0; i < checkBoxes.length; i++){
        checkBoxes[i].checked = false;
      }
}

function selView1(col1, col2) {

	var tb1 = document.getElementById("table1");
	for (var i = 0; i < tb1.rows.length; i++) {
		for (var j = 0; j < tb1.rows[i].cells.length; j++) {
			tb1.rows[i].cells[j].style.display = "";
			if (j == col1 || j == col2) {
				tb1.rows[i].cells[j].style.display = "none";
			}
		}
	}
}
function selView2(col1, col2) {
	var tb1 = document.getElementById("table1");
	for (var i = 0; i < tb1.rows.length; i++) {
		for (var j = 0; j < tb1.rows[i].cells.length; j++) {
			tb1.rows[i].cells[j].style.display = "";
			if (j == col1 || j == col2) {
				tb1.rows[i].cells[j].style.display = "none";
			}
		}
	}
}
function selView3(col1, col2) {
	var tb1 = document.getElementById("table1");
	for (var i = 0; i < tb1.rows.length; i++) {
		for (var j = 0; j < tb1.rows[i].cells.length; j++) {
			tb1.rows[i].cells[j].style.display = "";
			if (j == col1 || j == col2) {
				tb1.rows[i].cells[j].style.display = "none";
			}
		}
	}
}