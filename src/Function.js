const fn = {
    add: (num1, num2) => num1 + num2,
    getName: (callback) => {
        const name = 'Taehwan';
        setTimeout(() => {
            callback(name);
        }, 3000);
    }
};

module.exports = fn;