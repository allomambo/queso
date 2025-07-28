---
next:
    text: "Components"
    link: "/components/"
---

# Code convention

This document outlines the coding standards and conventions used throughout the Queso library to ensure consistency and maintainability.

## Naming Conventions

### Components

-   All component names are prefixed with `Queso`
-   Use PascalCase for component names: `QuesoClickable`, `QuesoModal`
-   Component files use PascalCase: `QuesoClickable.vue`, `QuesoModal.vue`
-   When used in an template use kebab-case: `<queso-clickable />`, `<queso-modal />`
-   Emits should be prefixed with the component name: `dropdown:open`, `collapsible:toggle`

### CSS Classes

-   All component CSS classes are prefixed with `queso-`
-   Use kebab-case for class names: `queso-clickable`, `queso-modal`
-   Follow BEM methodology: `queso-modal__overlay`, `queso-dropdown__popover__header`
-   Modifier classes use `is-` and `has-` prefixes: `is-open`, `has-selection`

### Files and Directories

-   Component folders: PascalCase (`QuesoClickable/`, `QuesoModal/`)
-   Utility files: PascalCase (`capitalize.ts`, `toCamelCase.ts`)
-   SCSS files: kebab-case with underscore prefix (`_grid_.scss`, `_make-variations.scss`)

## Component Structure

### File Organization

Each component follow this structure:

```
ComponentName/
├── index.ts               # Main export
├── ComponentName.vue      # Main component
├── types.ts               # TypeScript interfaces
├── ComponentName.test.ts  # Tests
```

For complex components with multiple parts, organize sub-components in a `components/` folder. Sub-components must keep their parent component's name as a prefix.

```
ComponentName/
├── index.ts               # Main export
├── ComponentName.vue      # Main component
├── types.ts               # TypeScript interfaces
├── ComponentName.test.ts  # Tests
└── components/            # Sub-components
    ├── ComponentNameSubComponent/
    │   ├── index.ts
    │   ├── ComponentNameSubComponent.vue
    │   └── types.ts
    └── ComponentNameAnotherSub/
        ├── index.ts
        ├── ComponentNameAnotherSub.vue
        └── types.ts
```

**Examples:**

-   `QuesoModal/components/QuesoModalOverlay/`
-   `QuesoDropdown/components/QuesoDropdownPopover/`

### Index File

The `index.ts` file serves as the main entry point for each component:

```ts
// Export the main component as default
export { QuesoComponent } from "./QuesoComponent.vue";
export default QuesoComponent;

// Export TypeScript interfaces and types
export type * from "./types";
```

### Types File

The `types.ts` file contains all TypeScript interfaces and types for the component:

```ts
// Props interface
export type QuesoComponentVariant = "primary" | "secondary";
export type QuesoComponentSize = "sm" | "md" | "lg";

export interface QuesoComponentProps {
    required?: boolean;
    variant?: QuesoComponentVariant;
    size?: QuesoComponentSize;
}

// Model for v-model support
export type QuesoComponentModel = boolean;

// Additional types
export type QuesoComponentMiscType = string;

export interface QuesoComponentMiscInterface {
    label: string;
    value: boolean;
}
```

**Key points:**

-   Define all props in a single interface
-   Extract union types to separate type definitions
-   Use descriptive prop names and types
-   Include model interface for v-model support
-   Export additional types for reusability

### Vue Component Template

```vue
<template>
    <div class="queso-component">
        <!-- Component content -->
    </div>
</template>

<script setup lang="ts">
// Imports
import { computed, ref } from "vue";
import { onClickOutside } from "@vueuse/core";

import { QuesoComponent } from "@components/QuesoComponent";

// Types
import type { QuesoComponentProps } from "./types";

// Props definition
const props = withDefaults(defineProps<QuesoComponentProps>(), {
    // Props default values
});

// Component logic
</script>

<style lang="scss" scoped>
// Component styles
</style>
```

## TypeScript Conventions

### Interfaces and Types

-   Use PascalCase for interfaces: `ButtonProps`, `ModalConfig`
-   Prefix interfaces with component name: `QuesoClickableProps`
-   Use descriptive names that indicate purpose

### Export/Import Patterns

Always use **Type-Only** import and exports

```ts
import type { QuesoComponentProps } from "./types";

export type { QuesoComponentInterface };
```

## CSS/Sass Conventions

### Variables

-   Use kebab-case for variable names
-   Prefix with purpose: `$queso-color-primary`, `$queso-spacing-base`

### Mixins and Functions

-   Use kebab-case for mixin names
-   Be descriptive: `@mixin queso-responsive-grid`, `@function queso-calculate-rem`
-   Always document complex mixins

### Import Structure

```scss
// Functions
@import "functions/helpers";
@import "functions/map";

// Mixins
@import "mixins/breakpoints";
@import "mixins/typography";

// Utilities
@import "utilities/easings";
```

## Code Style

### Indentation

-   Use 4 spaces for indentation
-   Maintain consistent spacing around operators and brackets

### Comments

-   Use `//` for single-line comments
-   Use `/* */` for multi-line comments
-   Document complex logic and non-obvious decisions

### Documentation

-   Include JSDoc comments for public APIs
-   Keep MD files updated

## Testing Conventions

::: warning WIP
Testing conventions and guidelines are currently being developed. The testing infrastructure and patterns are still in progress and may change as the library evolves.
:::

### Test Files

-   Use `.test.ts` extension for test files
-   Name tests descriptively: `QuesoClickable.test.ts`
-   Group related tests with `describe` blocks

### Test Structure

```ts
describe("QuesoComponent", () => {
    it("should render correctly", () => {
        // Test implementation
    });
});
```

## Git Conventions

::: warning WIP
Coming up.
:::
