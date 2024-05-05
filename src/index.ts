class StyleChain {
    private static instance: StyleChain;
    private element: HTMLElement;

    private constructor(element: HTMLElement) {
        if (!element) {
            throw new Error("Invalid element provided. Element cannot be undefined.");
        }
        this.element = element;
    }

    public static getInstance(element: HTMLElement): StyleChain {
        if (!StyleChain.instance) {
            StyleChain.instance = new StyleChain(element);
        }
        return StyleChain.instance;
    }

    setStyle(property: any, value: any) {
        if (!this.element) return;
        this.element.style[property] = value;
        return this;
    }
}

export function styleChain(element: HTMLElement) {
    return StyleChain.getInstance(element);
}