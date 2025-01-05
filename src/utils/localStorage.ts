
export function setLocalStorage(key: string, token: string) {
    localStorage.setItem(key, token);
};


export function getLocalStorage(key: string) {
    return localStorage.getItem(key);
};


export function removeLocalStorage(key: string) {
    localStorage.removeItem(key);
};
