# <em>µ</em>ce

[![Build Status](https://travis-ci.com/WebReflection/uce.svg?branch=master)](https://travis-ci.com/WebReflection/uce) [![Coverage Status](https://coveralls.io/repos/github/WebReflection/uce/badge.svg?branch=master)](https://coveralls.io/github/WebReflection/uce?branch=master)

![windflower](./uce-head.jpg)

<sup>**Social Media Photo by [Dawid Zawiła](https://unsplash.com/@davealmine) on [Unsplash](https://unsplash.com/)**</sup>

**[µhtml](https://github.com/WebReflection/uhtml#readme)** based Custom Elements.


### New in v1.2

So far, the only missing utility for *non* Shadow DOM cases, is a way to define *once* a generic *style* associated with a component, which is why the special `style: (selector) => css` property has been added, so that any component can automatically define any specific style, using the `selector` to confine inner nodes directives.

The `css` export is a dummy template literal tag, which is completely optional, but it might help minifiers, or [rollup plugins](https://github.com/asyncLiz/rollup-plugin-minify-html-literals), to minify that code too.

```js
// note: the css import is optional
import {define, css} from 'uce';

define('very-important', {
  style: sel => css`
    ${sel} {
      font-weight: bold;
      text-transform: uppercase;
    }
    ${sel}:hover {
      font-size: 2rem;
    }
  `
});
```

If the element doesn't extend a built-in, the received `sel`, as _selector_, will simply be its name, otherwise it'll be the built-in name with its `[is="..."]` attribute.

**Please note** the `style` won't interfere, or be attached anyhow, with the regular `element.style` or `this.style`, within a method, which is actually why I've chosen that name, so it's clear it's about the generic class/component style, and not its property.


## API In A Nutshell

_<em>µ</em>ce_ exports `render`, `html`, and `svg`, from _<em>µ</em>html_, plus its own way to `define` components.

In version *1.2*, it exports also a [dummy-tag](https://github.com/WebReflection/dummy-tag#readme) named `css`, useful to trigger _CSS_ minifiers.

Check out the [test page](https://webreflection.github.io/uce/test/) or this [code pen playground](https://codepen.io/WebReflection/pen/MWwJpWx?editors=0010).

```js
import {define, css} from 'uce';

define('my-component', {

  // if specified, it can extend built-ins too.
  // by default it's 'element', as HTMLElement
  extends: 'div',

  // if specified, it injects once per class definition
  // a <style> element in the document <head>.
  // In this case, selector will be the string:
  // div[is="my-component"]
  style: selector => css`${selector} {
    font-weight: bold;
  }`,

  // if specified, it's like the constructor
  // it's granted to be invoked *only once* on bootstrap
  // and *always* before connected/attributeChanged
  init() {
    // µhtml is provided automatically via this.html
    // it will populate the shadow root, even if closed
    // or simply the node, if no attachShadow is defined
    this.html`<h1>Hello 👋 µce</h1>`;
    // this.props resolves all attributes by name
    // and returns their values (always as string)
    // but it's handy to reach custom elements attributes
    // without any real need to observe these, i.e.
    // <my-ce name="ag" />
    console.log(this.props.name); // "ag"
  },

  // if you'd like to use props for other purposes,
  // as in direct access via .props or something else,
  // either define it or set it to null, so it won't
  // get the helper during its definition
  props: null,

  // if specified, it renders within its Shadow DOM
  // compatible with both open and closed modes
  attachShadow: {mode: 'closed'},

  // if specified, observe the list of attributes
  observedAttributes: ['test'],

  // if specified, will be notified per each
  // observed attribute change
  attributeChanged(name, oldValue, newValue){},

  // if specified, will be invoked when the node
  // is either appended live, or removed
  connected() {},
  disconnected() {},

  // events are automatically attached, as long
  // as they start with the `on` prefix
  // the context is *always* the component,
  // you'll never need to bind a method here
  onClick(event) {
    console.log(this); // always the current Custom Element
  },

  // if specified with `on` prefix and `Options` suffix,
  // allows adding the listener with a proper third argument
  onClickOptions: {once: true}, // or true, or default false

  // any other method, property, or getter/setter will be
  // properly configured in the defined class prototype
  get test() { return Math.random(); },

  set test(value) { console.log(value); },

  sharedData: [1, 2, 3],

  method() {
    return this.test;
  }

});
```


### How to avoid bundling µce per each component?

This module reserves, in the Custom Elements Registry a `uce-lib` class, which only purpose is to provide all exports as static getters.

```js
// whenever uce library is loaded
customElements.whenDefined('uce-lib').then(() => {

  // grab all utilities from the uce-lib Class
  const {define, render, html, svg} = customElements.get('uce-lib');

  // that's it: ready to go 🎉
  define('my-component', {
    init() {
      console.log('this is awesome!');
    }
  });
});

// as shortcut
customElements
  .whenDefined('uce-lib')
  .then(({define, render, html} = customElements.get('uce-lib')) => {
    // ... define your CE here ...
  });
```

#### Using a helper

With just a minimal amount of code it's possible to simplify further the retrieval of any custom elements.

```js
// possibly shared helper
const waitFor = what => customElements
                        .whenDefined(what)
                        .then(() => customElements.get(what));

// components definition without uce loaded upfront
waitFor('uce-lib').then(({define, render, html, svg}) => {
  // define your Custom Element
});
```



### Without classes, how does one define private properties?

Private properties can be created via a _WeakMap_, which is indeed how _Babel_ transforms these anyway.

```js
const privates = new WeakMap;
define('ce-with-privates', {
  init() {
    // define these once
    privates.set(this, {test: 1, other: '2'});
  },
  method() {
    // and use it anywhere you need them
    const {test, other} = privates.get(this);
    console.log(test, other);
  }
});
```


### Without classes, how does one extend other components?

There are at least two ways to extend an _uce_ component:

  * define via _uce_ your base component, and use `extends: "base-comp-name"` to extend it (built-ins supported!)
  * use one or more mixin through object literals

Object literals have indeed been used as mixin for a very long time, and the pattern with _uce_ would be very similar.

The only warning is that `Object.assign`, as well as object `{...spread}`, lose getters and setters in the process, so that if you want to extend more complex components, you should consider using [assignProperties](https://github.com/WebReflection/assign-properties#readme), or a similar helper.

```js
import $ from 'assign-properties';
const mixin = (...components) => $({}, ...components);

// a component literal definition
const NamedElement = {
  get name () { return this.tagName; }
};

// a generic NamedElement mixin
const FirstComponent = mixin(NamedElement, {
  method() {
    console.log(this.name);
  }
});

// define it via the FirstComponent mixin
define('first-component', FirstComponent);

// define it via mixin
define('first-component', mixin(FirstComponent, {
  otherThing() {}
}));
```
