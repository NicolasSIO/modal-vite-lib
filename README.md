# Modal-vite-lib

## Requirements

React : 18.2.0 \
Node : 18.16.0

## Install

```js
npm i modal-vite-lib
```

## Example

```
<div className="App">
  <Modal onClose={() => setIsDislplay(false)} isDisplay={isDisplay}>
    <p>Example modal content</p>
  </Modal>
</div>
```

In this example, we have three things to define :

- isDisplay: it's a boolean to know if the modal is display or not
- onClose: it's a function to close the modal, here with setIsDisplay
- And then, the HTML content of the modal
