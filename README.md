# Ecommerce Product

Welcome to the Ecommerce Product repository! This project is built using the Vite React boilerplate and includes configurations for ESLint, Prettier, Husky, and lint-staged. This README will provide you with all the necessary information to get started with the project.

## Table of Contents

-   [Installation](#installation)
-   [Usage](#usage)
-   [Folder Structure](#folder-structure)
-   [Linting and Code Formatting](#linting-and-code-formatting)
-   [Contributing](#contributing)
-   [License](#license)

## Installation

To get started with the project, follow these steps:

1. Clone the repository:

    ```shell
    git clone https://github.com/Thophylarh/philia
    ```

2. Change into the project directory:

    ```shell
    cd ecommerce-product
    ```

3. Install the dependencies using your preferred package manager. If you're using npm:

    ```shell
    npm install
    ```

    If you're using Yarn:

    ```shell
    yarn
    ```

## Usage

Once you have installed the dependencies, you can start the development server by running the following command:

```shell
npm run dev
```

or

```shell
yarn dev
```

This command will start the development server and open the application in your default browser. You can start making changes to the code and see the changes reflect in real-time.

To build the production-ready version of the project, run the following command:

```shell
npm run build
```

or

```shell
yarn build
```

This command will generate an optimized build of your application in the `dist` directory.

## Folder Structure

The folder structure of the project is as follows:

```
├── public
│   └── index.html
├── src
│   ├── components
│   ├── pages
│   ├── assets
│   └── index.js
├── .eslintrc.js
├── .prettierrc.js
├── .husky
│   └── pre-commit
```

-   The `public` directory contains the static assets and the main HTML file.
-   The `src` directory contains the main source code of the project.
    -   The `components` directory contains reusable React components.
    -   The `pages` directory contains the application's pages or screens.
    -   The `assets` directory contains the global assets like media files (images, icons etc), styles and CSS modules.
    -   The `index.js` file is responsible for rendering the application.

## Linting and Code Formatting

This project includes configurations for ESLint and Prettier to ensure consistent code style and catch potential errors. The ESLint configuration can be found in the `.eslintrc.js` file, and the Prettier configuration is in the `.prettierrc.js` file.

To lint your code, run the following command:

```shell
npm run lint
```

or

```shell
yarn lint
```

To format your code using Prettier, run the following command:

```shell
npm run format
```

or

```shell
yarn format
```

The project also includes Husky and lint-staged configurations to automatically run the linter and formatter on staged files before committing. This helps enforce code quality and consistent formatting in the project.

## Contributing

Contributions to this project are welcome! If you have any suggestions, bug reports, or feature requests, please create

an issue or submit a pull request.

Please make sure to review the [Contributing Guidelines](CONTRIBUTING.md) before making a contribution.

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use and modify the code as per the terms of the license.
