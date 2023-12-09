export const loginService = async (authDetail) => {
    const requestOptions = {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(authDetail)
    };

    const response = await fetch("http://localhost:8000/login", requestOptions);
    const data = await response.json();
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

    const response = await fetch("http://localhost:8000/register", requestOptions);
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