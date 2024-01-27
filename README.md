Questions
1.	What is NPM?
The Node Package Manager is a package manager for JavaScript mainly used with Node.js. It allows developers to discover, install, manage, and publish packages of reusable code, primarily focused on Node.js modules.
2.	What is SPA?
A Single Page Application is a web application or website that interacts with the user by dynamically rewriting the current page rather than loading entire new pages from the server.
3.	What is the event loop?
It manages asynchronous operations by processing them in a non-blocking manner. The event loop continuously checks the call stack and the callback queue. It pushes callback functions from the queue to the call stack when the call stack is empty, allowing asynchronous operations to be executed.
4.	What is the difference between export x and export default x? How do you import them differently?
Export x allows exporting multiple entities from the same module, while export default x allows exporting only one entity as the default export from a module.
Named export: import { x } from './module';
Default export: import x from './module';
5.	Why do you use className as a property in React and not class?
Class is a reserved keyword in JavaScript, used to define classes in object-oriented programming.
6.	Why should you not write the following? What will happen?
              <button onClick={setCounter(counter + 1)}> +1 </button>
Writing onClick={setCounter(counter + 1)} would immediately invoke the setCounter function with the current value of counter + 1, rather than waiting for the click event.
7.	What is object deconstruction and how is it connected to React components (example)?
Object destructuring allows you to extract multiple properties from an object and assign them to variables. In React components, you can destructure props or state to access their values more easily
function Props({ name, age }) {
  return <div>{name} is {age} years old.</div>;
}
8.	How is it possible to use HTML and JavaScript in the same function (like in a React Component)? What makes it possible under the hood?
This is possible in JSX, which is a syntax extension for JavaScript used in React. JSX allows mixing HTML-like syntax with JavaScript expressions. Under the hood, JSX code is converted into regular JavaScript code before it's executed by a process called transpilation. This conversion allows JavaScript expressions to be evaluated and HTML elements to be created dynamically, making it easier to build user interfaces in React.
9.	What is async/await? Bring an example
Async/await is a modern JavaScript feature that allows writing asynchronous code in a more synchronous-like manner. It is built on top of promises and provides a cleaner syntax for handling asynchronous operations.
async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}
10.	What is a Promise? Bring an example
A Promise is an object representing the eventual completion or failure of an asynchronous operation. It allows handling asynchronous operations more easily and provides better error handling compared to traditional callback functions.
const fetchData = new Promise((resolve, reject) => {
  fetch('https://api.example.com/data')
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      return response.json();
    })
    .then(data => {
      resolve(data);
    })
    .catch(error => {
      reject(error);
    });
});

fetchData.then(data => {
  console.log(data);
}).catch(error => {
  console.error('Error fetching data:', error);
});






# Getting Started with Create React App 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
