import Cookies from 'universal-cookie';

const cookies = new Cookies();

export const setCookie = (authToken) => {
    cookies.set(
        'auth-token',
        authToken,
        {
            expires: new Date(Date.now() + 8640000),
            path: '/',
        }
    )
}