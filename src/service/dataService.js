const getSession = () => {
	const token = JSON.parse(sessionStorage.getItem("token"));
	const id = JSON.parse(sessionStorage.getItem("id"));
	return { token, id };
};

export const getUserService = async () => {
	const browserData = getSession();
	const requestOptions = {
		method: "GET",
		headers: {
			Authorization: `Bearer ${browserData.token}`,
		},
	};
	const response = await fetch(
		`http://localhost:8000/users/600/${browserData.id}`,
		requestOptions
	);
	const user = await response.json();
	return user;
};

export const getUserOrdersService = async () => {
	const browserData = getSession();
	const requestOptions = {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${browserData.token}`,
		},
	};
	const response = await fetch(
		`${process.env.REACT_APP_HOST}/660/orders?user.id=${browserData.id}`,
		requestOptions
	);
	if (!response.ok) {
		throw { message: response.statusText, status: response.status }; //eslint-disable-line
	}
	const data = await response.json();
	return data;
};

export const createOrderService = async (cartList, total, user) => {
	const browserData = getSession();

	const order = {
		cartList: cartList,
		amount_paid: total,
		quantity: cartList.length,
		user: {
			name: user.name,
			email: user.email,
			id: user.id,
		},
	};

	const response = await fetch("http://localhost:8000/660/orders", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${browserData.token}`,
		},
		body: JSON.stringify(order),
	});

	const data = await response.json();
	return data;
};
