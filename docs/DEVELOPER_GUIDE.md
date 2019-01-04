# Jam3 Static Generator Developer Guide

In this guide you will find the explanation behind every feature of the boilerplate and how to use it. To checkout the
[base user guide](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md)
follow the link.

## Table of Contents

- [Folder Structure](#folder-structure)
- [NPM Dependencies](#npm-dependencies)
- [Code styling](#code-styling)
- [Nodejs and npm](#nodejs-and-npm)
- [Git and LFS](#git-and-lfs)
- [Build scripts](#build-scripts)
- [Built-in Customizations](#built-in-customizations)
- [Components creation](#components-creation)
- [Storybook](#storybook)
- [Performance](#performance)
- [Responsiveness](#responsiveness)
- [Unsupporting strategy](#unsupporting-strategy)
- [Animations](#animations)
- [React-Redux-Router](#react-redux-router)
- [Assets](#assets)
- [General documentation](#general-documentation)
- [Styling structure](#styling-structure)

## Folder Structure

The idea of the generator is don't create magic in order to compose the final boilerplate, based on that idea everything
that is inside [templates](https://github.com/Jam3/nyg-static-jam3/tree/master/templates) will be what we will
generate.

## NPM Dependencies

### Available Scripts

`npm start` Run the development server

`npm run release | npm run build` Create the production version (located in `/build`)

`npm test` Run the unit tests

`npm run js-lint` Run the JS linters, we are using ESLint

`npm run sass-lint`: Run the SASS linters, we are using stylelint

`npm run precommit`: Git hook that will run before every commit, we are formatting the code here

`npm run prepush`: Git hook that will run before every push, we are linting all the code

`npm run storybook`: Run storybook

`npm run component`: Script to create components with the best practices

`npm run stateless-component`: Script to create staless component with the best practices

`npm run audit-snyk`: Run Snyk to check vulnerabilities, disabled by default (price)

`npm run dependency-report`: Dependencies used in production, name|version|license|link

`npm run svg-component`: Create components for your SVGs

`npm run generate-doc`: Run the documentation creation, currently just SASS

### Package Dependencies

The dependendencies are structures in the following way:

- dependencies: Actual packages used in the final bundle, let's keep it clear
- devDependencies: Dependencies used to create the final bundle, including linting, security, etc
- optionalDependencies: Dependencies used in development but not needed it to create the final bundle, also help scripts

### CI

Strongly recommend to run `npm i --no-optional --no-package-lock` in your CI production build, we are evaluating using
`npm ci` in the future.

## Code styling

In order to ensure the same code styling across the duration of the project we are using the next technologies:

- ESLint - JS Linter, `.eslintrc`
- StyleLint - Sass Linter, `.stylelintrc`
- Prettier - Code Formatter, `.prettierrc`
- EditorConfig - IDE|Editor configuration, `.editorconfig`

## Nodejs and npm

We included some basic information for npm in `.npmrc`, the most important is that when we install a npm package we are
including a specific version. This help us to avoid weird behaviors after a package is updated and help us to track and
control updates. More information [here](https://docs.npmjs.com/files/npmrc)

## Git and LFS

We included a default `.gitignore` ordered by topic, please follow the addition rules to keep it consistent.

You will find the Git LFS configuration in `.gitattribute`, currently we are tracking only the files inside:

- src/assets/sounds
- src/assets/videos

Before add your files to Git LFS have in mind a couple options:

1.  Evaluate host those files outside of the repository, could be a CDN
2.  In case you want to trick the cache and add a hash for those files use them inside specific components instead of the
    public folder

## Build scripts

Our build scripts are using react-static, please review that documentation

### Built-in Customizations

#### Visualizer

Dependencies webpack visualizer, visit [npm](https://www.npmjs.com/package/webpack-visualizer-plugin) for more
information

#### Custom ESLint

Review `.eslintrc`

## Components creation

1.  `npm run component` & `npm run stateless-component`
2.  Architecture
3.  How to customize them

## Storybook

You can find the setup in the `.storybook` directory

## Performance

1.  Split bundles
2.  Split redux configuration
3.  preload & precache
4.  Bundle sizes
5.  Async
6.  Passive events
7.  Debounce|throttle events

## Responsiveness

There are several ways to tackle down this issue with the generator.

### Javascript controlling the resolutions

Javascript is listing the resolution changes and is setting classes in the HTML depending of the current resolution.
Based on this approach, you should use those classes in your CSS code or Javascript (Redux) and your application will
behave correctly

**Pros and Cons**

1.  Pros - You have access to the same information from JS (Redux) and CSS
2.  Cons - Every time a class is set in the HTML the browser is triggering a re-render
3.  Cons - This approach is slower than using media-queries

**Oportunities** Do the same but using media queries and move the resolution information using matchMedia

### Breakpoints

1.  Breakpoint handler + rems using. Pros + Cons

## Unsupporting strategy

1.  Included in the bundle, best practices

## Animations

1.  Less by default

## React-Redux-Router

React v16 + React Router v4 + Redux/Context. Don't be afraid to remove it :-)

## Assets

1.  Basic use of assets, how webpack include them and add hash.
2.  Async loading of some assets - in case we don't preload them
3.  SVGs - there are two ways of using SVGs.

    1.  Importing SVGs like other modules (react + webapck as url)

    ```
    import logo from './assets/logo.svg';
    ...
    <img src={logo} className="logo" alt="logo" />
    ```

    2.  Generate SVGs into React component by running a node script. This option is to transform a whole directory. By
        default, `SvgComponents` in `src/components` is where all svg must be. All SVGs will be stored in `SvgComponents`
        folder and Svg Components will be created under new folder. Please check out `svg-component.js` script in
        `scripts` folder.

        NOTE: Please double check newly generated Svg components if there is any `eslint` issues.

    ```bash
    // Run command below
    $ npm run svg-component

    // Example result
    src/components/SvgComponents/logo.svg
    src/components/SvgComponents/some-icon.svg
    src/components/SvgComponents/Logo/Logo.js
    src/components/SvgComponents/SomeIcon/SomeIcon.js
    ```

    3.  Transform selected SVG(s), one or more svg, by running a node script. Basic idea/setting is the same as #2.

    ```bash
    // Run command below
    $ npm run svg-component close-icon.svg more.svg
    ```

## General documentation

/docs

## Styling structure

1.  Global files
2.  Variables - global and specific
3.  Mixins
4.  Documentation
