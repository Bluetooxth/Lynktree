import Cookies from "universal-cookie";

const cookies = new Cookies();

export const getCookie = () => {
    return cookies.get('auth-token');
}