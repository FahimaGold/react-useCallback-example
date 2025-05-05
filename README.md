# ⚛️ React useCallback example

The example illustrates how `useCallback` is used and what benefits comes with it. It contains a counter that is **incremented**, and an item which can be **deleted** from a list. The `App`component (Parent Component) contains a list of items (children components). The counter is part of the parent, and the `Item` is a seperate component and takes a function as a prop. When the counter is incremented, the state changes, and hence the parent re-renders, including the ```Item``` component is re-rendered, which is not needed. In order to prevent this unnecessary re-rendering, we wrap `Item` in [`memo`](https://react.dev/reference/react/memo) so that it will be re-rendered only when its props change. Moreover, `Item` has a function as a prop, which is `handleItemDelete`. If the counter is incremented, the function `handleItemDelete` will be re-created, and hence its reference changes, so React considers the function as changed (a prop of the `Item`), which means `Item` will re-render (Take a look at the first GIF), at times even uncessary, and here it comes [`useCallback`](https://react.dev/reference/react/useCallback) that caches the function, and only creates a new one when its dependency changes, which will avoid re-rendering the component when unncessary, and this can used as an optimization in performance (imagine a heavy component that re-renders when unncessary), check out the second GIF.

## 🔄 Problem Without `useCallback`

When the counter is incremented, it causes the parent component (`App`) to re-render. Since the `handleItemDelete` function is redefined on each render, its reference changes. This means:

- Even if the list hasn't changed, the `Item` components will re-render.
- This happens because a new function reference is passed as a prop.
- Wrapping `Item` in `React.memo` helps **only if** the props stay the same—including function references.

### 📸 Without using useCallbacks

![example-without-useCallbacks](https://github.com/FahimaGold/react-useCallback-example/assets/13876176/9eb99224-bcf0-4b5a-b389-d359023efea5)


👉 `Item` re-renders unnecessarily every time the counter updates.  
(_See: `example-without-useCallback.gif`_)

### With using useCallbacks

![useCallbacks-example](https://github.com/FahimaGold/react-useCallback-example/assets/13876176/7d590d83-c133-4be6-be33-738552e45718)


👉 `Item` only re-renders when its relevant props change.  
(_See: `useCallback-example.gif`_)


## ✨ Benefits

- Improved performance
- Fewer unnecessary re-renders
- Useful when dealing with heavy child components

## ⚙️ **Setup Instructions**

### 1. Clone the repository

```bash
git clone https://github.com/FahimaGold/react-useCallback-example.git
cd react-useCallback-example
```

### 2. Install dependencies

`npm install`

### 3. Run the app

`npm start`
