# Voxes Nuxt module

Nuxt module which lets you easly use Voxes SDK in your project.

## Installation

```bash
yarn add voxes-nuxt-sdk
```

## Add module to nuxt.config.js

```js
export default {
  buildModules: ["voxes-nuxt-sdk"],
  voxes: {
    appKey: APP_KEY,
  },
};
```

Get your APP_KEY and configure a survey on https://voxes.io
