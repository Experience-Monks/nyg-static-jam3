# Contributing to the Jam3 Generator

Thinking about getting involved with the generator? Great!

Following these guidelines helps to communicate the core ideas and the purpose of the project. Please take a moment to review this document in order to make the contribution process easy and effective for everyone involved.

## Core Ideas

The generator structure is based off the original [Create React App](https://github.com/facebook/create-react-app) and [React Static](https://github.com/nozzle/react-static) templates, familiarize yourselves with both repos to get a deeper understanding.

The purpose of this tool is to generate an opinionated template with the Jam3's standards and best practices. This template doesn't have configurations or prompts like [yeoman](http://yeoman.io/) or [nyg](https://www.npmjs.com/package/nyg)

We included in the project the most commonly used components and directory structure, it doesn't mean you need to use all of it and in that case our strategy is to delete those files instead of having a massive configuration file with many different cases, as this is usually hard to maintain.

Feel free to include additional UI components via [Jam3 React UI](https://www.npmjs.com/package/@jam3/react-ui) as your project evolves and you can also generate components via the package.json dev scripts.

### Convention

Instead of letting the user specify the entry filename, we always assume it to be `src/index.js`. Rather than letting the user specify the output bundle name, we generate it, but make sure to include the content hash in it. Whenever possible, we want to leverage convention to make good choices for the user, especially in cases where it’s easy to misconfigure something.

### Interactivity

One of the core ideas of the generator is to create a project template that is easy to maintain, one of the ways to achieve that is to reduce the amount of variable replacements when the project is being generated.

This project is using `nyg` and it does provide ways to add prompts, however we are trying to avoid any kind of prompt, or at the very least only add ones that are important and won't affect the maintenance of the project.

### Breaking the Rules

No rules are perfect. Sometimes we may introduce flags or configuration if we believe the value is high enough to justify the mental cost. For example, we know that apps may be hosted on paths different from the root, and we need to support this use case. However, we still try to fall back to heuristics when possible. In this example, we ask that you specify `homepage` in `package.json`, and infer the correct path based on it. We also nudge the user to fill out the `homepage` after the build, so the user becomes aware that the feature exists.

## Submitting a Pull Request

We use [Standard Version](https://github.com/conventional-changelog/standard-version) to help automate generating change logs, tags and release versioning, please ensure you follow [Conventional Commit Messages](https://conventionalcommits.org/) when making commits, as this is needed by Standard Version scripts to generate change logs based off the commits.

Good pull requests, such as patches, improvements, and new features, are a fantastic help. They should remain focused in scope and avoid containing unrelated commits.

Please **ask first** if somebody else is already working on this or the core developers think your feature is in-scope for Create React App. Generally always have a related issue with discussions for whatever you are including.

Once you know you are the only one working on this, please assign the issue to yourself.

Please also provide a **test plan**, i.e. specify how you verified that your addition works.

Don't forget to document in the repository your new change or patch. You should use the README.md DEVELOPER_GUIDE.md or FEATURES.md

## How to release a new version

Run `npm release` and Standard Version will handle the version bumping and change log updates.

## Folder Structure

- `templates`: It contains the files and folders needed to generate the app.
- `test`: After running `npm test` it will copy the app into the `output` directory

### Overview of root directory

The entry point of the generator is `index.js`, this file is in charge of:

1.  Copying the `templates` directory into the `output` directory
2.  Runs `npm install` once it has copied all the files
3.  Runs the post-install tasks
    1.  Updates the node version inside `.nvmrc`

## Setting Up a Local Copy

1.  Clone the repo with `git clone https://github.com/Jam3/nyg-jam3.git`
2.  Here you can start contributing with:
    1.  The generator, modifing the `index.js`
    2.  The template that will be generated inside `templates/*`

## Test your changes

### I've changed the templates content

Because the whole template is self-contained in the `templates` directory, you have total control over it.

You can run the project using `npm start` or if you wanna try the build, run `npm run build`

### I've changed the generator builder

To test the whole generator installation, exactly how it will happen when the users execute it, run `npm test`. You can find the generated project in `test/output`
