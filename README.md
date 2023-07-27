# 🧀 Queso

#### Required

-   Node 16.14.2
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

## JS utils

```
import {
    checkStatus,
    arrayToGraphQL,
    typeCheck,
    mutateState,
    resizeEnd,
    mailTo,
    tel,
    toKebab,
    capitalize,
    isTouch,
    reducedMotion,
} from "@allomambo/queso/scripts/utils";
```
