<h1 align="center">Welcome to One Dionys - Error Handling Utilities! 👋 </h1>

<p align="center">Functions to handle and report errors in the application. 💖 </p>

<p align="center">
<img src="https://img.shields.io/github/contributors/onedionys/onedionys-error-handling-utilities?style=flat-square">
<img src="https://img.shields.io/github/issues/onedionys/onedionys-error-handling-utilities?style=flat-square">
<img src="https://img.shields.io/github/stars/onedionys/onedionys-error-handling-utilities?style=flat-square"> 
<img src="https://img.shields.io/github/forks/onedionys/onedionys-error-handling-utilities?style=flat-square">
<img src="https://img.shields.io/github/last-commit/onedionys/onedionys-error-handling-utilities.svg?style=flat-square">
<img src="https://img.shields.io/github/languages/code-size/onedionys/onedionys-error-handling-utilities?style=flat-square">
<img src="https://img.shields.io/github/license/onedionys/onedionys-error-handling-utilities?style=flat-square">
</p>

## 💾 Requirements

* `Web Browser` - Can be used as an emulator to build applications. Example [Chrome, Firefox, Safari & Opera].
* `Internet` - Because many use CDN and to make it easier to find solutions to all problems.

## 🎯 How To Use

#### Example Syntax

```javascript
const { handleError } = require('error-handling-utilities');

try {
  // Code that may throw an error
  throw new Error('Example Error');
} catch (error) {
  const result = handleError(error);
  console.log(result); // Output: { message: 'Example Error', status: 'error' }
}
```

#### Explanation

* The handleError function takes an error object as input and logs the error message to the console. It returns an object containing the error message and a status of 'error'.

#### Return Value

* `message`: The error message.
* `status`: The status indicating the error (usually 'error').

## 📆 Release Date

* v1.0.0 : 08 March 2024
* v1.0.1 : 11 March 2024
* v4.0.0 : 11 March 2024
* v4.0.1 : 13 March 2024

## 🧑 Author

* Facebook : <a href="https://www.facebook.com/theonedionys"> Oned Ionys</a>
* Instagram : <a href="https://www.instagram.com/onedionys/"> @onedionys</a>
* Twitter : <a href="https://twitter.com/onedionys"> @onedionys</a>
* LinkedIn :  <a href="https://www.linkedin.com/in/onedionys/"> @onedionys</a>

## 📝 License

* Copyright © 2024 One Dionys
* **One Dionys - Error Handling Utilities is an open source project licensed under the MIT license**

## ☕️ Suppport & Donation

Love One Dionys - Error Handling Utilities? Support this project by donating or sharing with others in need.

<a href="https://www.buymeacoffee.com/onedionys"><img src="https://img.shields.io/badge/Buy_Me_A_Coffee-FFDD00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black"/> </a>

**Made with ❤️ One Dionys**
