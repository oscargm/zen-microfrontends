# ZEN Microfrontends

This is a monorepo containing 3 projects:

- global-store
- module-loader
- module

Also the necessary Cache files have been included to be able to use the project inside ZEN and INFINTIY. Follow [this instructions](./zen-files/README.md) to include all the project into Infinity.

## global-store

**[global-store README](./global-store/README.md)**
An observable object [global.data](./global-store/src/global.data.ts) which is configured through a function [globalStore()](./global-store/src/global.store.ts) that returns a new instance of the store.

## module-loader

A function that includes a `<script>` tag into the document header that will load the desired module.
Interface definition can be found [here](./module-loader/src/index.d.ts)
Method implementation can be found [here](./module-loader/src/loader.ts)

## module

A small React application to be built in 4 different ways:

- Complete application with dependencies
  - html
  - js
  - dependencies (react+react-dom...)
- Complete application without dependencies
  - html
  - js
- Standalone module with dependencies
  - js
  - dependencies (react+react-dom...)
- Standalone module without dependencies
  - js

When used as a standalone module is exposed through an object app with a function render that can be found [here](./module/src/app.tsx)
