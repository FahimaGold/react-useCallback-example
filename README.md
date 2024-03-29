# React useCallback example.

The example illustrates how `useCallback` is used and what benefits comes with it. It contains a counter that is **incremented**, and an item which can be **deleted** from a list. The `App`component (Parent Component) contains a list of items (children components). The counter is part of the parent, and the `Item` is a seperate component and takes a function as a prop. When the counter is incremented, the state changes, and hence the parent re-renders, including the ```Item``` component is re-rendered, which is not needed. In order to prevent this unnecessary re-rendering, we wrap `Item` in [`memo`](https://react.dev/reference/react/memo) so that it will be re-rendered only when its props change. Moreover, `Item` has a function as a prop, which is `handleItemDelete`. If the counter is incremented, the function `handleItemDelete` will be re-created, and hence its reference changes, so React considers the function as changed (a prop of the `Item`), which means `Item` will re-render (Take a look at the first GIF), at times even uncessary, and here it comes [`useCallback`](https://react.dev/reference/react/useCallback) that caches the function, and only creates a new one when its dependency changes, which will avoid re-rendering the component when unncessary, and this can used as an optimization in performance (imagine a heavy component that re-renders when unncessary), check out the second GIF.

## Without using useCallbacks

![example-without-useCallbacks](https://github.com/FahimaGold/react-useCallback-example/assets/13876176/9eb99224-bcf0-4b5a-b389-d359023efea5)

## With using useCallbacks

![useCallbacks-example](https://github.com/FahimaGold/react-useCallback-example/assets/13876176/7d590d83-c133-4be6-be33-738552e45718)
