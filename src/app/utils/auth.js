// utils/auth.js
import Cookies from "js-cookie";
import api from "./axiosInterceptor";
export const getAuthToken = () => Cookies.get("authToken");

export const isLoggedIn = () => !!getAuthToken();

export const logoutUser = () => {
    Cookies.remove("authToken");
};


export const fetchCartCount = async () => {
    if (!isLoggedIn()) return;
    const res = await api.get({ url: "v1/cart/count" })
    return res.count
}