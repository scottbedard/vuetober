//
// After route hook
//
module.exports = function({ from, to }) {
    if (to.title) {
        document.title = to.title;
    }
};
