# Reaxor

_Boilerplate for better state management, styling, testing and cleaner code_


## React powered by:
* **Webpack**: Development and Production ready (https://webpack.github.io/)
* **Babel**: Configured to work with React, ES7 and React Hot Loader 3! (https://babeljs.io/)
* **MobX**: The best state management for React :heart_eyes: (https://mobxjs.github.io/mobx/)
* **Flow**: Type Checker for Javascript (http://flowtype.org/)
* **ESLint**: Configured to work with React (http://eslint.org)
* **Aphrodite**: Inline Styles that work (https://github.com/Khan/aphrodite)
* **Enzyme[1] w/ Jest[2]**: Painless Javascript unit testing
	* [1] (http://airbnb.io/enzyme/)
	* [2] (https://facebook.github.io/jest/)
* **React Hot Loader 3**: Hot Loader for stateless components (https://github.com/gaearon/react-hot-boilerplate/pull/61)
* **Why did you update**: no more unnecessary re-renders (https://github.com/garbles/why-did-you-update)

## Installation
```
git clone https://github.com/KadoBOT/reaxor.git
npm install
```
## Usage
Development Build:  ``npm start``  
Production Build: ``npm run build``  
Testing: ``npm test`` or ``npm run test:watch`` for watching file change or ``npm run test:coverage`` for showing test coverage
Lint checking: ``npm run lint``  
Flow testing:  ``npm run typecheck``  
## Folder Structure
```
..root
|--dist //production bundle.js will be placed here
|--src
	|--components
		|--__tests__ //Jest detects folders named this way
		App.js //with inline css (by Aphrodite)
		MyComponent.js
	|--stores
		Store.js //MobX Store for State Management
index.js
```
## Outros
Since this is a boilerplate, I won't go deeper on how to use it's features (ie. how to use MobX , Aphrodite or Jest), but you can find pre-configured files inside this project that uses them, so you can get a taste of it. If you want to learn more about them and how to use it, you can click on the links on the top of this page near each package name and description.  
## Contributing
* Send pull requests, I love them!
* Be sure to run the tests provided in this repo before sending the pull requests.
