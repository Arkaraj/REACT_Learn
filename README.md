# LEARN-REACT

## REACT installation

### Create React app

```sh
$ npx create-react-app app-name
```

## Run

```sh
$ npm start
```

Or

### REACT cdn

https://reactjs.org/docs/cdn-links.html

React and ReactDom

```html
<script crossorigin src="https://unpkg.com/react@17/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
```

As JSX is not supported in browsers babel will be required

https://babeljs.io/

```html
<scirpt type="text/babel">
```

### Helpful Tools
#### Vscode extension

ES7 React/Redux/GraphQL/React-Native snippets

Sublime Babel

#### Chrome Extensions

Chrome React Developer Tools

### Roadmap for REACT

https://roadmap.sh/react

### For Optimized Production build

```sh
$ npm run build
```

Creates build folder for deploying

### Routing

```sh
$ npm i react-router-dom
```

### This is REDUX and REACT Context BRANCH

### Install REDUX

```sh
$ npm i redux react-redux
```

### Stuffs

```text
STORE -> its a globalized state

ACTION -> its gonna call on state change

REDUCER -> Based on action its gonna modify Store

DISPATCH -> Execute the action, sends the action to reducer
```

Make these in index.js file

#### Useful Chrome Dev tool

https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en