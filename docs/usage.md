# Usage

## How to use components

Components are designed to be simple and flexible. Each component accepts props for customization and provides slots for content injection. Simply import any component from the package and use it in your Vue templates.

```vue
<template>
    <queso-component />
</template>

<script setup>
import { QuesoComponent } from "@allomambo/queso";
</script>
```

::: info Overview
For a complete list of components, go to [Components overview](../components/)
:::

## How to use the Sass core

Import the sass core from the package in your project root file, often `App.vue`

```vue
<script setup>
import "@allomambo/queso/styles/core";
</script>
```

If you use a frontend build tool like Vite or Webpack, we recommend that you import the sass core as additional data in your config file.

::: code-group

```ts{5} [Vite]
export default defineConfig({
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@import "@allomambo/queso/styles/core";`
            }
        }
    }
});
```

```ts{5} [Webpack]
module.exports = {
    css: {
        loaderOptions: {
            sass: {
                data: `@import "@assets/scss/main.scss";`
            }
        }
    }
};
```

:::

### Configurations

You can update the config of some mixins by re-declaring variables in your own sass base. All the configs available are below :

```scss
// Breakpoints
$breakpoints: (
    // <name>: <screen-size>
    xxs: 0,
    xs: 420px,
    sm: 576px,
    md: 768px,
    lg: 1024px,
    xl: 1280px,
    2xl: 1536px,
    3xl: 1920px
);

// Containers
$containers-screen-size-base: 1440px;

$containers: (
    // <name>: <container-width> <gutter-width> <fluid>
    default: 1920px 60px,
    fluid: 1920px 60px fluid,
    small: 420px 60px,
    medium: 870px 60px,
    full: none 60px
);

// Stack
$stack-gap: 20px;

// Grid
$grid: (
    // <breakpoint>: <columns> <gap-size>
    xs: 4 20px,
    lg: 8 30px,
    xl: 12 30px
);
```

::: info Overview
For a complete list of mixins and functions, go to [Sass core overview](../sass-core/)
:::

## How to use utils

```ts
import { quesoUtilFn } from "@allomambo/queso/utils";
```

::: info All utils
For a complete list of utils, go to [Utils](../utils)
:::
