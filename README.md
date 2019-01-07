# Jam3 Static Generator [![stable](http://hughsk.github.io/stability-badges/dist/stable.svg)](http://github.com/hughsk/stability-badges)

Jam3 Static Frontend App Generator with no build configuration and no prompts.

- [Usage](#usage)
- [Developer Contribution Guide](https://github.com/Jam3/nyg-static-jam3/blob/master/CONTRIBUTING.md) – Read first if you are a developer
- [Developer Guide](#developer-guide) – How to develop apps bootstrapped with the generator
- [Main scripts](#main-scripts) – Running scripts

## Usage

[![NPM](https://nodei.co/npm/nyg-static-jam3.png)](https://www.npmjs.com/package/nyg-static-jam3)

To create a new project based on the generator there are a few ways:

1.  Using the generator npm package.
2.  Generate the output template.
3.  Copy and paste and update some values in the template.

### Using the npm package

The nyg generator is designed to function similar to yeoman. To get it running, simply follow these steps:

```bash
npm i nyg -g
npm i nyg-static-jam3 -g
cd your-project-directory
nyg nyg-static-jam3
```

### Generate the output template

Do this if you have the source code and want to generate a version ready to be used in a project.

1.  Make sure you are in the root of the generator
2.  Run `npm test`
3.  Copy/Paste the files in `/test/output/` into your project folder.
4.  Update the `README.md` and `package.json`

## Developer Contribution Guide

#### Contribute with boilerplate

1.  Go to `/templates`
2.  Run `npm i`
3.  Ready to go, everything is inside that folder

#### Contribute with the generation

1.  Review `/index.js`, everything is there

If you are looking to contribute with the generator is important to read the [Developer Contribution Guide](https://github.com/Jam3/nyg-static-jam3/blob/master/CONTRIBUTING.md)

## Developer Guide

We are using `react-static` as a base; you can checkout their [Documentation](https://github.com/nozzle/react-static).

You can checkout our [Developer Guides](https://github.com/Jam3/nyg-static-jam3/blob/master/templates/docs/DEVELOPER_GUIDE.md) to know more about the features and customizations.

## Main scripts

TBF

## Publishing to production

TBF
