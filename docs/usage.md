# Usage

## Use components

```vue
<template>
    <queso-component ...props />
</template>

<script setup>
import { QuesoComponent } from "@allomambo/queso";
</script>
```

## Use the Sass core

Import the sass core from the package

```scss
@import "@allomambo/queso/styles/core";
```

**2.** You can update the config of some mixins by re-declaring variables in your own sass base. All the configs available are in this [config file](.config/queso-config.scss).

#### Frontend tooling

If you use a frontend tool like Vite or Webpack, we recommend that you import the sass core as additional data in your config file.

::: code-group

```ts{5} [Vite]
export default defineConfig({
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@import "@assets/scss/main.scss";`
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
