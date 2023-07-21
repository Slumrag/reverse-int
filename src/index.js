module.exports = function reverse(number) {
    return +number
        .toString()
        .split("")
        .filter((item) => /[0-9]/.test(item))
        .reverse()
        .join("");
};
