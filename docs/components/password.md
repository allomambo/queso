---
next:
    text: "Sass core"
    link: "/sass-core/"
---

# QuesoPassword

A password input field component that supports secure password entry with visibility toggle, two-way data binding with `v-model`, and provides a consistent interface for form inputs. All form field components share the same base structure for consistent styling and behavior across your application.

## Basic Usage

```vue
<template>
    <queso-password
        name="password"
        label="Password"
        placeholder="Enter your password"
        v-model="password"
    />
</template>

<script setup>
import { ref } from "vue";
import { QuesoPassword } from "@allomambo/queso";

const password = ref("");
</script>
```

## Props

### `name`

-   **Type:** `string`
-   **Required:** `true`
-   **Description:** The name attribute for the password field.

### `label`

-   **Type:** `string`
-   **Required:** `false`
-   **Description:** The label text displayed above the password field.

### `id`

-   **Type:** `string`
-   **Required:** `false`
-   **Description:** The ID attribute for the password field (defaults to `name` if not provided).

### `placeholder`

-   **Type:** `string`
-   **Required:** `false`
-   **Description:** Placeholder text for the password field.

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
-   **Description:** Additional HTML attributes to apply to the password input element.

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
-   **Description:** Content displayed before the password field.

### `beforePasswordInput`

-   **Props:** `{}`
-   **Description:** Content displayed before the password input element (inside the password wrapper).

### `afterPasswordInput`

-   **Props:** `{}`
-   **Description:** Content displayed after the password input element (inside the password wrapper).

### `toggleVisibilityButton`

-   **Props:** `{ isPasswordShow: boolean, togglePasswordVisibility: () => void, showPassword: () => void, hidePassword: () => void }`
-   **Description:** Custom toggle button for password visibility. Defaults to a button with "◎" icon.

### `toggleVisibilityButtonIcon`

-   **Props:** `{}`
-   **Description:** Icon content for the default visibility toggle button.

### `afterInput`

-   **Props:** `ExposedData`
-   **Description:** Content displayed after the password field.

### `error`

-   **Props:** `ExposedData`
-   **Description:** Content displayed when the field has an error state.

## Examples

### Basic TypeScript Support

::: code-group

```vue [Vue Template]
<template>
    <queso-password
        name="password"
        label="Password"
        placeholder="Enter your password"
        v-model="password"
    />
</template>

<script setup lang="ts">
import { ref } from "vue";
import { QuesoPassword } from "@allomambo/queso";
import type { QuesoPasswordModel } from "@allomambo/queso";

const password = ref<QuesoPasswordModel>("");
</script>
```

```html [Rendered HTML]
<div class="queso-field">
    <label for="password" class="queso-field__label">
        <span class="queso-field__label__text">Password</span>
    </label>
    <div class="queso-field__input">
        <div class="queso-password">
            <input
                class="queso-password__input"
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
            />
            <button class="queso-password__visibility-button">◎</button>
        </div>
    </div>
</div>
```

:::

### Custom Toggle Button

::: code-group

```vue [Vue Template]
<template>
    <queso-password
        name="password"
        label="Password"
        placeholder="Enter your password"
        v-model="password"
    >
        <template
            #toggleVisibilityButton="{
                isPasswordShow,
                togglePasswordVisibility,
            }"
        >
            <button
                class="custom-toggle-btn"
                @click="togglePasswordVisibility"
                :aria-label="isPasswordShow ? 'Hide password' : 'Show password'"
            >
                {{ isPasswordShow ? "👁️" : "👁️‍🗨️" }}
            </button>
        </template>
    </queso-password>
</template>

<script setup>
import { ref } from "vue";
import { QuesoPassword } from "@allomambo/queso";

const password = ref("");
</script>
```

```html [Rendered HTML]
<div class="queso-field">
    <label for="password" class="queso-field__label">
        <span class="queso-field__label__text">Password</span>
    </label>
    <div class="queso-field__input">
        <div class="queso-password">
            <input
                class="queso-password__input"
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
            />
            <button class="custom-toggle-btn" aria-label="Show password">
                👁️‍🗨️
            </button>
        </div>
    </div>
</div>
```

:::

### With Extra Attributes

::: code-group

```vue [Vue Template]
<template>
    <queso-password
        name="password"
        label="Password"
        placeholder="Enter your password"
        v-model="password"
        :extra-attributes="{
            'data-testid': 'password-input',
            'aria-describedby': 'password-help',
            autocomplete: 'current-password',
            minlength: '8',
        }"
    />
    <div id="password-help" class="help-text">
        Password must be at least 8 characters long
    </div>
</template>

<script setup>
import { ref } from "vue";
import { QuesoPassword } from "@allomambo/queso";

const password = ref("");
</script>
```

```html [Rendered HTML]
<div class="queso-field">
    <label for="password" class="queso-field__label">
        <span class="queso-field__label__text">Password</span>
    </label>
    <div class="queso-field__input">
        <div class="queso-password">
            <input
                class="queso-password__input"
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                data-testid="password-input"
                aria-describedby="password-help"
                autocomplete="current-password"
                minlength="8"
            />
            <button class="queso-password__visibility-button">◎</button>
        </div>
    </div>
</div>
<div id="password-help" class="help-text">
    Password must be at least 8 characters long
</div>
```

:::

### Read-only Field

::: code-group

```vue [Vue Template]
<template>
    <queso-password
        name="current-password"
        label="Current Password"
        is-read-only
        v-model="currentPassword"
    />
</template>

<script setup>
import { ref } from "vue";
import { QuesoPassword } from "@allomambo/queso";

const currentPassword = ref("••••••••");
</script>
```

```html [Rendered HTML]
<div class="queso-field is-read-only">
    <label for="current-password" class="queso-field__label">
        <span class="queso-field__label__text">Current Password</span>
    </label>
    <div class="queso-field__input">
        <div class="queso-password">
            <span class="queso-password__readonly">••••••••</span>
        </div>
    </div>
</div>
```

:::

## Behavior

-   **Two-way Data Binding**: Uses Vue 3's `defineModel` for seamless `v-model` integration
-   **Form Integration**: Designed to work seamlessly with HTML forms
-   **Password Visibility Toggle**: Built-in functionality to show/hide password
-   **Read-only Mode**: When `is-read-only` is true, displays the value as text instead of an input
-   **Secure Input**: Defaults to `type="password"` for secure password entry

## Accessibility

-   **Label Association**: Uses proper `label` element with `for` attribute
-   **Required Indicator**: Displays visual indicator for required fields
-   **Error States**: Provides clear error messaging and styling
-   **Keyboard Navigation**: Full keyboard accessibility support
-   **Screen Reader Support**: Proper ARIA attributes and semantic structure
-   **State Management**: Tracks hover and focus states for accessibility
-   **Password Toggle**: Proper ARIA labels for password visibility toggle

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
-   `.queso-password` - Password wrapper
-   `.queso-password__input` - Password input element
-   `.queso-password__readonly` - Read-only text display
-   `.queso-password__visibility-button` - Default visibility toggle button

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

export type QuesoPasswordModel = string;

export interface QuesoPasswordProps {
    name: string;
    label?: string;
    id?: string;
    placeholder?: string;
    isRequired?: boolean;
    isDisabled?: boolean;
    isReadOnly?: boolean;
    isError?: boolean;
    extraAttributes?: Record<string, string>;
}
```
