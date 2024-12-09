$(document).ready(function () {
	$("#submitProductBtn").click(function (e) {
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
            supplier: supplier
		};

		$.ajax({
			type: "POST",
			url: "https://finalproject.site/api/v1/products",
			data: newProductData,
			// headers: { "Content-Type": "application/json" },
			dataType: "json",
			success: function (response) {
				console.log(response);
			},
		});

        // Redirect to products index page
        window.location.href = "/final-project/product/product.html";
	});
});
