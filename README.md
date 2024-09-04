# 🧀 Queso

#### Required

-   Node 20.10.0
-   VueJS 3.2.37

> **Note**  
> Complete documentation in progress

## Installation

**1.** Install the package

```
# With Yarn:
yarn add @allomambo/queso

# With npm:
npm install @allomambo/queso
```

**2.** Use components in your project

```
<template>
    ...
    <queso-simple-component ...props />
    ...
    <queso-complex-component ...props>
        <template #slot>
            ...
        </template>
    </queso-complex-component>
    ...
</template>

<script setup>
import { QuesoSimpleComponent, QuesoComplexComponent } from "@allomambo/queso";
</script>
```

## Use sass mixins, functions and utils

**1.** Import the sass core from the package

```
import "@allomambo/queso/styles/core";
```

**2.** You can update the config of some mixins by re-declaring variables in your own sass base. All the configs available are in this [config file](.config/queso-config.scss).

#### Frontend tooling

If you use a frontend tool like Vite or Webpack, we recommend that you import as additional data the sass core and your configs.

```
# Vite
export default defineConfig({
    ...
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@import "@assets/scss/main.scss";`,
            },
        },
    },
    ...
});
```

```
# Webpackw
module.exports = {
    ...
    css: {
        loaderOptions: {
            sass: {
                data: `@import "@assets/scss/main.scss";`,
            },
        },
    },
    ...
};

```

## JS utils

```
import {
    capitalize,
    firstObjectOfArray,
    mailTo,
    resizeEnd,
    tel,
    toCamelCase,
    toKebabCase,
    toPascalCase,
    toSnakeCase,
} from "@allomambo/queso/utils";
```
