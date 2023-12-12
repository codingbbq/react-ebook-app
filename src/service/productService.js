export const getProductListService = async (searchTerm) => {
    const response = await fetch(
		`${process.env.REACT_APP_HOST}/444/products?name_like=${searchTerm}`
	);
    if(!response.ok) {
        throw new Error({ message : response.statusText, status: response.status });
    }
	const data = await response.json();
	return data;
};

export const getProductService = async (id) => {
	const response = await fetch(`${process.env.REACT_APP_HOST}/444/products/${id}`);
    if(!response.ok) {
        throw new Error({ message : response.statusText, status: response.status });
    }
	const data = await response.json();
	return data;
};

export const getFeaturedService = async () => {
	const response = await fetch(`${process.env.REACT_APP_HOST}/444/featured_products`);
    if(!response.ok) {
        throw new Error({ message : response.statusText, status: response.status });
    }
	const data = await response.json();
	return data;
};
