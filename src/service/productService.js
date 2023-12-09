export const getProductListService = async (searchTerm) => {
	const response = await fetch(
		`http://localhost:8000/444/products?name_like=${searchTerm}`
	);
	const data = await response.json();
	return data;
};

export const getProductService = async (id) => {
	const response = await fetch(`http://localhost:8000/444/products/${id}`);
	const data = await response.json();
	return data;
};

export const getFeaturedService = async () => {
	const response = await fetch("http://localhost:8000/444/featured_products");
	const data = await response.json();
	return data;
};
