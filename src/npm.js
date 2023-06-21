// NPM, which stands for "Node Package Manager," is a widely used package manager for JavaScript programming language. It is primarily used in the context of Node.js, a runtime environment for executing JavaScript code outside of a web browser. NPM allows developers to easily manage, share, and reuse code packages or modules, making it an essential tool for building JavaScript applications, libraries, and frameworks.

// 1. NPM provides CLI (Command Line Interface) tool for installing, publishing, and managing Node.js packages.

// 2. Each NPM project contains a file called 'package.json' that includes metadata about the project. This file is used to store the project's name, version, description, author, and other relevant information, as well as a list of dependencies required by the project.

// 3. Structure of typical package.json file:

// {
//   "name": "my-project",
//   "version": "1.0.0",
//   "description": "My first project",
//   "main": "index.js",
//   "scripts": {
//     "test": "echo \"Error: no test specified\" && exit 1"
//   },
//   "author": "John Doe",
//   "license": "ISC",
//   "dependencies": {
//     "express": "^4.17.1"
//   },
//   "devDependencies": {
//     "nodemon": "^2.0.7"
//   }
// }

// 4. NPM follows principles of semantic versioning. Each package has a version number that consists of three numbers separated by dots (e.g., 1.2.3). The first number represents the major version, the second number represents the minor version, and the third number represents the patch version. When a package is updated, the version number is incremented according to the following rules:

// 4.1. Increment the major version when you make incompatible API changes.

// 4.2. Increment the minor version when you add functionality in a backwards-compatible manner.

// 4.3. Increment the patch version when you make backwards-compatible bug fixes.

// 5. NPM provides two ways to install packages: locally and globally.

// 5.1. Local installation: When you install a package locally, it is installed in the 'node_modules' folder of the current project. To install a package locally, you use the 'npm install' command followed by the package name. For example, the following command installs the 'express' package locally:

// npm install express

// 5.2. Global installation: When you install a package globally, it is installed in the 'node_modules' folder of the current user's home directory. To install a package globally, you use the 'npm install' command followed by the package name and the '-g' flag. For example, the following command installs the 'nodemon' package globally:

// npm install nodemon -g

// 6. Find outdated packages: To find outdated packages, you use the 'npm outdated' command. For example, the following command finds outdated packages in the current project:

// npm outdated

// 7. Update packages: To update packages, you use the 'npm update' command. For example, the following command updates all packages in the current project:

// npm update

// 8. Uninstall packages: To uninstall packages, you use the 'npm uninstall' command. For example, the following command uninstalls the 'express' package from the current project:

// npm uninstall express

// 9. Find vulnerabilities: To find vulnerabilities in packages, you use the 'npm audit' command. For example, the following command finds vulnerabilities in the current project:

// npm audit

// 10. You can define specific versions in package.json file:

// {
//   "name": "my-project",
//   "version": "1.0.0",
//   "description": "My first project",
//   "main": "index.js",
//   "scripts": {
//     "test": "echo \"Error: no test specified\" && exit 1"
//   },
//   "author": "John Doe",
//   "license": "ISC",
//   "dependencies": {
//     "express": "4.17.1"
//   },
//   "devDependencies": {
//     "nodemon": "2.0.7"
//   }
// }

// You can define specific major and minor versions in package.json file, or you can define a range of versions in package.json file:

// {
//   "name": "my-project",
//   "version": "1.0.0",
//   "description": "My first project",
//   "main": "index.js",
//   "scripts": {
//     "test": "echo \"Error: no test specified\" && exit 1"
//   },
//   "author": "John Doe",
//   "license": "ISC",
//   "dependencies": {
//     "express": "^4.17.1" // << major version is fixed, minor version can be updated
//   },
//   "devDependencies": {
//     "nodemon": "2.x" // << major version is fixed, minor version can be updated
//   }
// }
