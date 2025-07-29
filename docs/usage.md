# Usage

This guide shows you how to use Queso components, Sass core, and utilities in your Vue.js projects.

## Components

Components are designed to be simple and flexible. Each component accepts props for customization and provides slots for content injection. Simply import any component from the package and use it in your Vue templates.

### Basic Usage

```vue
<template>
    <queso-clickable> Click me </queso-clickable>
</template>

<script setup>
import { QuesoClickable } from "@allomambo/queso";
</script>
```

### With Props and Model

```vue
<template>
    <queso-text-field
        placeholder="Enter text..."
        :is-disabled="isDisabled"
        v-model="value"
    />
</template>

<script setup>
import { ref } from "vue";

import { QuesoTextField } from "@allomambo/queso";

const value = ref("");
const isDisabled = ref(false);
</script>
```

### With Slots

```vue
<template>
    <queso-modal :is-open="showModal">
        <template #header>
            <h2>Modal Title</h2>
        </template>

        <template #default>
            <p>Modal content goes here</p>
        </template>

        <template #footer>
            <button @click="showModal = false">Close</button>
        </template>
    </queso-modal>
</template>

<script setup>
import { ref } from "vue";

import { QuesoModal } from "@allomambo/queso";

const showModal = ref(false);
</script>
```

::: info Component Library
For a complete list of available components and their props, visit the [Components overview](/components/)
:::

## Sass Core

The Sass core provides mixins, functions, and utilities for consistent styling across your project.

### Basic Import

Import the Sass core in your project root file (usually `App.vue`):

```vue
<script setup>
import "@allomambo/queso/styles/core";
</script>
```

### Build Tool Configuration

For better performance, we recommend importing the Sass core as additional data in your build configuration:

::: code-group

```ts{5} [Vite]
export default defineConfig({
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@import "@allomambo/queso/styles/core";`,
            },
        },
    },
});
```

```ts{5} [Webpack]
module.exports = {
    css: {
        loaderOptions: {
            sass: {
                additionalData: `@import "@allomambo/queso/styles/core";`,
            },
        },
    },
};
```

:::

### Using Mixins

```scss
.my-component {
    @include min(md) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }

    @include stack("vertical", "top", "left");
}
```

### Using Functions

```scss
@mixin my-mixin($var) {
    $fluid: index-exists($var, fluid);
}
```

```scss
.my-element {
    --my-element-margin-x-default: 20px;
    margin-left: dvar(--my-element-margin-x);
    margin-right: dvar(--my-element-margin-x);
}
```

### Configuration

You can customize the Sass core by overriding variables in your own Sass files:

```scss
// Breakpoints
$breakpoints: (
    xxs: 0,
    xs: 420px,
    sm: 576px,
    md: 768px,
    lg: 1024px,
    xl: 1280px,
    2xl: 1536px,
    3xl: 1920px,
);

// Containers
$containers-screen-size-base: 1440px;
$containers: (
    default: 1920px 60px,
    fluid: 1920px 60px fluid,
    small: 420px 60px,
    medium: 870px 60px,
    full: none 60px,
);

// Stack
$stack-gap: 20px;

// Grid
$grid: (
    xs: 4 20px,
    lg: 8 30px,
    xl: 12 30px,
);
```

::: info Sass Documentation
For detailed information about available mixins and functions, visit the [Sass core overview](/sass-core/)
:::

## Utilities

Queso provides JavaScript utility functions for common tasks.

### Basic Usage

```ts
import { capitalize, toPascalCase } from "@allomambo/queso/utils";

const text = capitalize("hello world"); // "Hello world"
const pascalCase = toPascalCase("hello-world"); // "HelloWorld"
```

::: info All Utilities
For a complete list of available utilities, visit the [Utils](/utils) documentation.
:::

## TypeScript Support

All components and utilities are fully typed with TypeScript:

```ts
import type { QuesoClickableProps } from "@allomambo/queso/types";

// Use types for props
export interface MyComponentProps extends QuesoClickableProps {
    label?: string;
}
```
