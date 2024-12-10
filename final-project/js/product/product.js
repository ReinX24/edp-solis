$(document).ready(function () {
	//* Fetch the information from the page
	function fetchProductData() {
		$.ajax({
			type: "GET",
			url: "https://finalproject.site/api/v1/products",
			dataType: "json",
			success: function (response) {

				$("#productsTableBody").hide();

				// Adding the elements to our page
				response.forEach((product) => {
					// console.log(product);
					//* Adding product data rows
					const newRow = document.createElement("tr");

					const id = document.createElement("td");
					id.textContent = product.id;

					newRow.append(id);

					const productName = document.createElement("td");
					productName.textContent = product.product_name;

					newRow.append(productName);

					const productPrice = document.createElement("td");
					productPrice.textContent = product.product_price;

					newRow.append(productPrice);

					const productDescription = document.createElement("td");
					productDescription.textContent = product.description;

					newRow.append(productDescription);

					const productDiscount = document.createElement("td");
					productDiscount.textContent = product.discount + "%";

					newRow.append(productDiscount);

					const productDiscountedPrice = document.createElement("td");
					productDiscountedPrice.textContent =
						product.discounted_price;

					newRow.append(productDiscountedPrice);

					const productSKU = document.createElement("td");
					productSKU.textContent = product.sku;

					newRow.append(productSKU);

					const productSupplier = document.createElement("td");
					productSupplier.textContent = product.supplier;

					newRow.append(productSupplier);

					const operationsData = document.createElement("td");
					const operationsContainer = document.createElement("div");
					operationsContainer.className =
						"d-flex justify-content-center gap-2";

					const editBtn = document.createElement("a");
					editBtn.className = "btn btn-secondary";
					editBtn.textContent = "Edit";
					editBtn.href = "product_edit.html?id=" + product.id;

					operationsContainer.append(editBtn);

					const deleteBtn = document.createElement("a");
					deleteBtn.className = "btn btn-danger";
					deleteBtn.textContent = "Delete";
					deleteBtn.id = "deleteBtn";
					deleteBtn.href = "product_delete.html?id=" + product.id;

					operationsContainer.append(deleteBtn);

					operationsData.append(operationsContainer);

					newRow.append(operationsData);

					$("#productsTableBody").append(newRow);

					$("#productsTableBody").fadeIn(1000);
				});
			},
		});
	}

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
			supplier: supplier,
		};

		$.ajax({
			type: "POST",
			url: "https://finalproject.site/api/v1/products",
			data: newProductData,
			dataType: "json",
			success: function (response) {
				$("#addProductModal").modal("toggle");
				$("#addSuccessModal").modal("toggle");
				fetchProductData();
			},
		});
	});

	fetchProductData();
});
