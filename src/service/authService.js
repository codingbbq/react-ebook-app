export const loginService = async (authDetail) => {
    const requestOptions = {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(authDetail)
    };

    const response = await fetch(`${process.env.REACT_API_HOST}/login`, requestOptions);
    if(!response.ok) {
        throw new Error({ message : response.statusText, status: response.status });
    }
    const data = await response.json();
    if(!response.ok) {
        throw new Error({ message : response.statusText, status: response.status });
    }
    if(data.accessToken) {
        sessionStorage.setItem("token", JSON.stringify(data.accessToken));
        sessionStorage.setItem("id", JSON.stringify(data.user.id));
    }
    return data;
};

export const registerService = async (registerDetails) => {
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(registerDetails)
    };

    const response = await fetch(`${process.env.REACT_API_HOST}/register`, requestOptions);
    if(!response.ok) {
        throw new Error({ message : response.statusText, status: response.status });
    }
    const data = await response.json();
    if(data.accessToken) {
        sessionStorage.setItem("token", JSON.stringify(data.accessToken));
        sessionStorage.setItem("id", JSON.stringify(data.user.id));
    }
    return data;
};

export const logoutService = async () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("id");
};