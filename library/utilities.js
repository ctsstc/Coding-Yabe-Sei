module.exports = {
    wait: require("util").promisify(setTimeout),

    properCase: string => {
        return string.replace(/([^\W_]+[^\s-]*) */g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
    },

    randomFromArray: array => array[Math.floor(Math.random() * array.length)]
};
