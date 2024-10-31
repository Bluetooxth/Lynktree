import Cookies from 'universal-cookie';

const cookies = new Cookies();

export const removeCookie = () => {
    cookies.remove('auth-token',{
        path: '/',
    });
}