$(document).ready( function() {
	$.ajax( {
		url:"http://daretodiscover.net/wine",
		type:"GET",
		success: function (data) {
			var src= $("#list-template").html();
			var template= Handlebars.compile(src);

			var html= template({
				wines: data
			});

			$("#all-wines").html(html);
		}
	});


});

$(document).on("click", ".show-wine-btn", function () {
		$.ajax({
			url:"http://daretodiscover.net/wine/"+$(this).attr("id"),
			type:"GET",
			success: function (data){
				$("#modal-title").html(data["name"]);
				$("#show-description").html(data["description"]);
				$("#show-grapes").html(data["grapes"]);
				$("#show-country").html(data["country"]);
				$("#show-region").html(data["region"]);
				$("#show-year").html(data["year"]);
				$("#show-price").html(data["price"]);
				$("#modal").modal("show");
			}


		});

});
