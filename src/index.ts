

function StyleChain(element: HTMLElement) {
    return new Proxy(this, {
        get: function(target: HTMLElement, property) {
            return function(value) {
                element.style[property] = value;
                return target;
            };
        }
    });
}

module.exports = StyleChain;