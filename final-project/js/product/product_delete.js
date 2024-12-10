$(document).ready(function () {
	// TODO: make delete functionality into a modal to delete data
	//* Get the URL parameters
	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);

	$.ajax({
		type: "GET",
		url: "https://finalproject.site/api/v1/products/" + urlParams.get("id"),
		crossDomain: true,
		dataType: "json",
		success: function (response) {
			// Add data to page
			// console.log(response);
			$("#id").val(response.id);
			$("#name").val(response.product_name);
			$("#price").val(response.product_price);
			$("#description").val(response.description);
			$("#discount").val(response.discount);
			$("#discounted_price").val(response.discounted_price);
			$("#sku").val(response.sku);
			$("#supplier").val(response.supplier);
		},
	});

	// Delete the product and redirect to products home page
	$("#deleteProductBtn").click(function (e) {
		e.preventDefault();
		$.ajax({
			type: "DELETE",
			url:
				"https://finalproject.site/api/v1/products/" +
				urlParams.get("id"),
			// crossDomain: true,
			// dataType: "json",
			success: function (response) {
				alert("Successfully deleted product!");
				window.location.href = "/final-project/product/product.html";
			},
			error: function(e) {
				alert("Delete Product Error!");
			}
		});
	});
});
