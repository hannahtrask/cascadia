class StyleChain {
    private element: HTMLElement;

    constructor(element: HTMLElement) {
        this.element = element;
    }

    setStyle(property: any, value: any) {
        this.element.style[property] = value;
        return this;
    }
}

export function styleChain(element: HTMLElement) {
    return new StyleChain(element);
}