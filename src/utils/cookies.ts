import Cookies from 'js-cookie';

export function setCookies(key: string, token: string) {
    Cookies.set(key, token, { expires: 360000, sameSite: 'strict', secure: true });
};


export function getCookies(key: string) {
    return Cookies.get(key);
};


export function removeCookies(key: string) {
    Cookies.remove(key);
};
