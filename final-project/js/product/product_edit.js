$(document).ready(function () {
	// TODO: make edit functionality into a modal to edit data
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

	$("#updateProductBtn").click(function (e) {
		e.preventDefault();

		const name = $("#name").val();
		const productPrice = $("#price").val();
		const productDescription = $("#description").val();
		const productDiscount = $("#discount").val();
		const sku = $("#sku").val();
		const supplier = $("#supplier").val();

		const newProductData = {
			product_name: name,
			product_price: productPrice,
			description: productDescription,
			discount: productDiscount,
			sku: sku,
			supplier: supplier,
		};

		$.ajax({
			type: "PUT",
			url:
				"https://finalproject.site/api/v1/products/" +
				urlParams.get("id"),
			crossDomain: true,
			data: newProductData,
			dataType: "json",
			success: function (response) {
				alert("Successfully edited product!");

				// Redirect to products index page
				window.location.href = "/final-project/product/product.html";
			},
		});
	});
});
