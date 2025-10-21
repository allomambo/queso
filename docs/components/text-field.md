---
next:
    text: "Sass core"
    link: "/sass-core/"
---

# QuesoTextField

A text input field component that supports various input types, two-way data binding with `v-model`, and provides a consistent interface for form inputs. All form field components share the same base structure for consistent styling and behavior across your application.

## Basic Usage

```vue
<template>
    <queso-text-field
        name="email"
        label="Email Address"
        placeholder="Enter your email"
        type="email"
        is-required
        v-model="email"
    />
</template>

<script setup>
import { ref } from "vue";
import { QuesoTextField } from "@allomambo/queso";

const email = ref("");
</script>
```

## Props

### `name`

-   **Type:** `string`
-   **Required:** `true`
-   **Description:** The name attribute for the input field.

### `label`

-   **Type:** `string`
-   **Required:** `false`
-   **Description:** The label text displayed above the input.

### `id`

-   **Type:** `string`
-   **Required:** `false`
-   **Description:** The ID attribute for the input field (defaults to `name` if not provided).

### `type`

-   **Type:** `"text" | "url" | "tel" | "email" | "number" | "date"`
-   **Default:** `"text"`
-   **Description:** The HTML input type.

### `placeholder`

-   **Type:** `string`
-   **Required:** `false`
-   **Description:** Placeholder text for the input field.

### `isRequired`

-   **Type:** `boolean`
-   **Default:** `false`
-   **Description:** Whether the field is required.

### `isDisabled`

-   **Type:** `boolean`
-   **Default:** `false`
-   **Description:** Whether the field is disabled.

### `isReadOnly`

-   **Type:** `boolean`
-   **Default:** `false`
-   **Description:** Whether the field is read-only.

### `isError`

-   **Type:** `boolean`
-   **Default:** `false`
-   **Description:** Whether the field has an error state.

### `extraAttributes`

-   **Type:** `Record<string, string>`
-   **Required:** `false`
-   **Description:** Additional HTML attributes to apply to the input element.

## Slots

### `beforeLabel`

-   **Props:** `ExposedData`
-   **Description:** Content displayed before the label text.

### `label`

-   **Props:** `ExposedData`
-   **Description:** The main label content. Defaults to the `label` prop if not provided.

### `required`

-   **Props:** `ExposedData`
-   **Description:** Content displayed for the required indicator. Defaults to `*` if not provided.

### `afterLabel`

-   **Props:** `ExposedData`
-   **Description:** Content displayed after the label text.

### `beforeInput`

-   **Props:** `ExposedData`
-   **Description:** Content displayed before the input field.

### `beforeTextFieldInput`

-   **Props:** `ExposedData`
-   **Description:** Content displayed before the text input element (inside the input wrapper).

### `readOnly`

-   **Props:** `ExposedData`
-   **Description:** Content displayed when the field is in read-only mode. Defaults to displaying the field value as text.

### `afterTextFieldInput`

-   **Props:** `ExposedData`
-   **Description:** Content displayed after the text input element (inside the input wrapper).

### `afterInput`

-   **Props:** `ExposedData`
-   **Description:** Content displayed after the input field.

### `error`

-   **Props:** `ExposedData`
-   **Description:** Content displayed when the field has an error state.

## Examples

### Basic TypeScript Support

::: code-group

```vue [Vue Template]
<template>
    <queso-text-field
        name="username"
        label="Username"
        placeholder="Enter your username"
        v-model="username"
    />
</template>

<script setup lang="ts">
import { ref } from "vue";
import { QuesoTextField } from "@allomambo/queso";

import type { QuesoTextFieldModel } from "@allomambo/queso";

const username = ref<QuesoTextFieldModel>("");
</script>
```

```html [Rendered HTML]
<div class="queso-field">
    <label for="username" class="queso-field__label">
        <span class="queso-field__label__text">Username</span>
    </label>
    <div class="queso-field__input">
        <div class="queso-text-field">
            <input
                class="queso-text-field__input"
                type="text"
                id="username"
                name="username"
                placeholder="Enter your username"
            />
        </div>
    </div>
</div>
```

:::

### Email Field with Error Validation

::: code-group

```vue [Vue Template]
<template>
    <queso-text-field
        name="email"
        label="Email Address"
        type="email"
        placeholder="Enter your email"
        is-required
        is-error
        v-model="email"
    >
        <template #error>
            <span>Please enter a valid email address</span>
        </template>
    </queso-text-field>
</template>

<script setup>
import { ref } from "vue";
import { QuesoTextField } from "@allomambo/queso";

const email = ref("");
</script>
```

```html [Rendered HTML]
<div class="queso-field is-error">
    <label for="email" class="queso-field__label">
        <span class="queso-field__label__text">Email Address</span>
        <span class="queso-field__label__required">*</span>
    </label>
    <div class="queso-field__input">
        <div class="queso-text-field">
            <input
                class="queso-text-field__input"
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                required
            />
        </div>
    </div>
    <div class="queso-field__error">
        <span>Please enter a valid email address</span>
    </div>
</div>
```

:::

### Custom Input with Icons

::: code-group

```vue [Vue Template]
<template>
    <queso-text-field
        name="search"
        label="Search"
        placeholder="Search for products..."
        v-model="searchQuery"
    >
        <template #beforeTextFieldInput>
            <span class="search-icon">🔍</span>
        </template>
        <template #afterTextFieldInput>
            <button
                v-if="searchQuery"
                class="clear-button"
                @click="clearSearch"
            >
                ✕
            </button>
        </template>
    </queso-text-field>
</template>

<script setup>
import { ref } from "vue";
import { QuesoTextField } from "@allomambo/queso";

const searchQuery = ref("");

const clearSearch = () => {
    searchQuery.value = "";
};
</script>
```

```html [Rendered HTML]
<div class="queso-field">
    <label for="search" class="queso-field__label">
        <span class="queso-field__label__text">Search</span>
    </label>
    <div class="queso-field__input">
        <div class="queso-text-field">
            <span class="search-icon">🔍</span>
            <input
                class="queso-text-field__input"
                type="text"
                id="search"
                name="search"
                placeholder="Search for products..."
            />
            <button class="clear-button">✕</button>
        </div>
    </div>
</div>
```

:::

### Read-only Field

::: code-group

```vue [Vue Template]
<template>
    <queso-text-field
        name="user-id"
        label="User ID"
        is-read-only
        v-model="userId"
    />
</template>

<script setup>
import { ref } from "vue";
import { QuesoTextField } from "@allomambo/queso";

const userId = ref("USER-12345");
</script>
```

```html [Rendered HTML]
<div class="queso-field is-read-only">
    <label for="user-id" class="queso-field__label">
        <span class="queso-field__label__text">User ID</span>
    </label>
    <div class="queso-field__input">
        <div class="queso-text-field">
            <span class="queso-text-field__readonly">USER-12345</span>
        </div>
    </div>
</div>
```

:::

### With Extra Attributes

::: code-group

```vue [Vue Template]
<template>
    <queso-text-field
        name="search"
        label="Search"
        placeholder="Enter search term..."
        :extra-attributes="{
            'data-testid': 'search-input',
            'aria-describedby': 'search-help',
            autocomplete: 'off',
            maxlength: '100',
        }"
        v-model="searchQuery"
    />
    <div id="search-help" class="help-text">
        Enter keywords to search for products
    </div>
</template>

<script setup>
import { ref } from "vue";
import { QuesoTextField } from "@allomambo/queso";

const searchQuery = ref("");
</script>
```

```html [Rendered HTML]
<div class="queso-field">
    <label for="search" class="queso-field__label">
        <span class="queso-field__label__text">Search</span>
    </label>
    <div class="queso-field__input">
        <div class="queso-text-field">
            <input
                class="queso-text-field__input"
                type="text"
                id="search"
                name="search"
                placeholder="Enter search term..."
                data-testid="search-input"
                aria-describedby="search-help"
                autocomplete="off"
                maxlength="100"
            />
        </div>
    </div>
</div>
<div id="search-help" class="help-text">
    Enter keywords to search for products
</div>
```

:::

## Behavior

-   **Two-way Data Binding**: Uses Vue 3's `defineModel` for seamless `v-model` integration
-   **Form Integration**: Designed to work seamlessly with HTML forms
-   **Input Types**: Supports standard HTML input types: `text`, `url`, `tel`, `email`, `number`, `date`
-   **Read-only Mode**: When `is-read-only` is true, displays the value as text instead of an input

## Accessibility

-   **Label Association**: Uses proper `label` element with `for` attribute
-   **Required Indicator**: Displays visual indicator for required fields
-   **Error States**: Provides clear error messaging and styling
-   **Keyboard Navigation**: Full keyboard accessibility support
-   **Screen Reader Support**: Proper ARIA attributes and semantic structure
-   **State Management**: Tracks hover and focus states for accessibility

## CSS Classes

### Field Container

-   `.queso-field` - Main field container
-   `.queso-field.is-disabled` - Disabled state
-   `.queso-field.is-error` - Error state
-   `.queso-field.is-active` - Focused state
-   `.queso-field.is-hover` - Hover state
-   `.queso-field.is-read-only` - Read-only state

### Label

-   `.queso-field__label` - Label container
-   `.queso-field__label__text` - Label text
-   `.queso-field__label__required` - Required indicator

### Input

-   `.queso-field__input` - Input container
-   `.queso-text-field` - Text field wrapper
-   `.queso-text-field__input` - Input element
-   `.queso-text-field__readonly` - Read-only text display

### Error

-   `.queso-field__error` - Error message container

## Type Declaration

```typescript
export interface ExposedData {
    fieldID: string;
    fieldName: string;
    isRequired: boolean;
    isDisabled: boolean;
    isReadOnly: boolean;
    isError: boolean;
    isActive: boolean;
    isHover: boolean;
}

export type QuesoTextFieldType =
    | "text"
    | "url"
    | "tel"
    | "email"
    | "number"
    | "date";
export type QuesoTextFieldModel = string;

export interface QuesoTextFieldProps {
    name: string;
    label?: string;
    id?: string;
    type?: QuesoTextFieldType;
    placeholder?: string;
    isRequired?: boolean;
    isDisabled?: boolean;
    isReadOnly?: boolean;
    isError?: boolean;
    extraAttributes?: Record<string, string>;
}
```
