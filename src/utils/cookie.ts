export function setCookie(
    name: string,
    value: string,
    options: {
        path?: string;
        expires?: Date | string;
    } = {}
) {
    options = {
        path: '/',
        ...options,
    };

    if (options.expires instanceof Date) {
        options.expires = options.expires.toUTCString();
    }

    let updatedCookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;

    Object.entries(options).forEach(([optionKey, optionValue]) => {
        // @ts-ignore
        if (optionValue !== true) {
            updatedCookie += `; ${optionKey}${
                optionValue !== undefined ? `=${optionValue}` : ''
            }`;
        }
    });

    document.cookie = updatedCookie;
}

export function getCookie(name: string) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}