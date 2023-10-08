const asyncLocalStorage = {
    setItem: async function (key: string, value: string) {
        return Promise.resolve().then( function () {
            localStorage.setItem(key, value)
        });
    },
    removeItem: async function (key: string) {
        return Promise.resolve().then( function() {
            localStorage.removeItem(key);
        })
    }
}

export {
    asyncLocalStorage
}