$(document).on("click", "#submit-btn", function() {
	$.ajax({ 
		url:"http://daretodiscover.net/wine",
		type:"POST",
		data:{ 
			name:$("#name").val(),
			grapes:$("#grapes").val(),
			country:$("#country").val(),
			region:$("#region").val(),
			year:$("#year").val(),
			price:$("#price").val(),
			description:$("#description").val(),
		
		},
		success: function () {
			//window.location="index_wine.html";
		},
		error: function () {
			alert("something wrong");
		}

	});
});