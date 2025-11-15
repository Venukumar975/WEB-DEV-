# React & JavaScript Concepts Summary

## 1. Difference Between JS and JSX

JS is standard JavaScript executed by the browser. JSX is a syntax
extension that allows you to write HTML-like code inside JavaScript,
mainly used in React.

**Example (JSX):**

``` jsx
const element = <h1>Hello World</h1>;
```

JSX is not directly understood by the browser; tools like Babel/Vite
convert it to JS.

------------------------------------------------------------------------

## 2. Hoisting in JS vs JSX

### **Hoisting in JS**

Variables and functions are moved to the top of their scope during
compilation.

Example:

``` js
console.log(a); // undefined
var a = 10;
```

### **Hoisting in JSX**

JSX itself does not add new hoisting rules.\
But React components **must be defined before use** if not using
function declarations.

------------------------------------------------------------------------

## 3. Why Vite Is Used

-   Extremely fast development server\
-   Uses ES Modules\
-   Instant HMR (Hot Module Replacement)\
-   Built-in JSX support\
-   Better than CRA (Create-React-App)

------------------------------------------------------------------------

## 4. Why React Uses PascalCase for Components

React treats: - lowercase tags → HTML elements\
- PascalCase tags → Custom React components

Example:

``` jsx
function MyButton() { return <button>Click</button>; }
<MyButton />  // works
<mybutton />  // treated as HTML → error
```

------------------------------------------------------------------------

## 5. What Are React Components?

Reusable building blocks that return UI.

Example:

``` jsx
function Welcome() {
  return <h1>Hello</h1>;
}
```

------------------------------------------------------------------------

## 6. What Is `<Fragment>` and How to Avoid It?

React Fragment lets you return multiple elements **without a wrapping
div**.

### Long form:

``` jsx
<Fragment>
  <h1>Hello</h1>
  <p>World</p>
</Fragment>
```

### Short form (preferred):

``` jsx
<>
  <h1>Hello</h1>
  <p>World</p>
</>
```

No hierarchy difference; they behave exactly the same.But there will be a difference in original html file or dom tree compared to other wrappers like div , main , .. these html tags are included in original dom tree but the Fragment tag is overlooked or doesnt get included in the original dom tree
