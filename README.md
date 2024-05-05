# Style Cascadia

Style Cascadia is a simple utility for easily chaining multiple CSS style changes on an HTML element in Typescript.

## Installation

You can install Style Cascadia using npm or yarn:

```bash
npm install style-cascadia
# or
yarn add style-cascadia
```

## Implementation

Implementation is simple. Import `styleChain` from `style-cascadia`, select the element you wish to style
and chain the styles you want to apply. Finally, call the `setStyle()` method to apply the styles.

```typescript
    const element: HTMLElement = document.getElementById('header')!;
    cascade(element as HTMLElement)
        .setStyle('backgroundColor', 'red')
        .setStyle('color', 'white')
        .setStyle('fontSize', '20px')
        .setStyle('opacity', '0.5')
        .setStyle('fontStyle', 'italic');
```

### Heads up

Chained styles currently are only compatible with client-side rendering.