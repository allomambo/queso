# QuesoCheckbox

A single checkbox component that supports boolean state, two-way data binding with `v-model`, and provides a consistent interface for form inputs. All form field components share the same base structure for consistent styling and behavior across your application.

## Basic Usage

```vue
<template>
    <queso-checkbox
        name="terms"
        label="Terms and Conditions"
        box-label="I agree to the terms and conditions"
        v-model="agreedToTerms"
    />
</template>

<script setup>
import { ref } from "vue";
import { QuesoCheckbox } from "@allomambo/queso";

const agreedToTerms = ref(false);
</script>
```

## Props

### `name`

-   **Type:** `string`
-   **Required:** `true`
-   **Description:** The name attribute for the checkbox field.

### `label`

-   **Type:** `string`
-   **Required:** `false`
-   **Description:** The label text displayed above the checkbox group.

### `id`

-   **Type:** `string`
-   **Required:** `false`
-   **Description:** The ID attribute for the checkbox field (defaults to `name` if not provided).

### `boxLabel`

-   **Type:** `string`
-   **Required:** `true`
-   **Description:** The label text displayed next to the checkbox.

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
-   **Description:** Additional HTML attributes to apply to the checkbox input element.

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
-   **Description:** Content displayed before the checkbox field.

### `checkbox`

-   **Props:** `ExposedData & { isHovered: boolean, isChecked: boolean }`
-   **Description:** Custom checkbox container element. Defaults to a styled checkbox container.

### `checkboxBox`

-   **Props:** `ExposedData & { isHovered: boolean, isChecked: boolean }`
-   **Description:** Custom checkbox box element. Defaults to a styled checkbox box.

### `checkboxBoxSymbol`

-   **Props:** `ExposedData & { isHovered: boolean, isChecked: boolean }`
-   **Description:** Symbol displayed inside the checkbox box when checked. Defaults to "✔︎".

### `checkboxLabel`

-   **Props:** `ExposedData & { isHovered: boolean, isChecked: boolean }`
-   **Description:** Custom label element for the checkbox. Defaults to the `boxLabel` prop.

### `checkboxLabelRequired`

-   **Props:** `ExposedData & { isHovered: boolean, isChecked: boolean }`
-   **Description:** Custom required indicator for the checkbox label. Defaults to "\*".

### `afterInput`

-   **Props:** `ExposedData`
-   **Description:** Content displayed after the checkbox field.

### `error`

-   **Props:** `ExposedData`
-   **Description:** Content displayed when the field has an error state.

## Examples

### Basic TypeScript Support

::: code-group

```vue [Vue Template]
<template>
    <queso-checkbox
        name="newsletter"
        label="Email Preferences"
        box-label="Subscribe to our newsletter"
        v-model="subscribeNewsletter"
    />
</template>

<script setup lang="ts">
import { ref } from "vue";
import { QuesoCheckbox } from "@allomambo/queso";
import type { QuesoCheckboxModel } from "@allomambo/queso";

const subscribeNewsletter = ref<QuesoCheckboxModel>(false);
</script>
```

```html [Rendered HTML]
<div class="queso-field">
    <div class="queso-field__label">
        <span class="queso-field__label__text">Email Preferences</span>
    </div>
    <div class="queso-field__input">
        <label class="queso-checkbox" for="newsletter">
            <span class="queso-checkbox__box">
                <span class="queso-checkbox__box__symbol">✔︎</span>
            </span>
            <span class="queso-checkbox__label">
                <span class="queso-checkbox__label__text"
                    >Subscribe to our newsletter</span
                >
            </span>
            <input
                class="queso-checkbox__native"
                type="checkbox"
                id="newsletter"
                name="newsletter"
            />
        </label>
    </div>
</div>
```

:::

### Custom Checkbox Box

::: code-group

```vue [Vue Template]
<template>
    <queso-checkbox
        name="privacy"
        label="Privacy Settings"
        box-label="I accept the privacy policy"
        v-model="acceptPrivacy"
    >
        <template #checkboxBox>
            <div class="custom-checkbox-box">
                <div class="custom-checkbox-square"></div>
                <div class="custom-checkbox-checkmark">✓</div>
            </div>
        </template>
    </queso-checkbox>
</template>

<script setup>
import { ref } from "vue";
import { QuesoCheckbox } from "@allomambo/queso";

const acceptPrivacy = ref(false);
</script>
```

```html [Rendered HTML]
<div class="queso-field">
    <div class="queso-field__label">
        <span class="queso-field__label__text">Privacy Settings</span>
    </div>
    <div class="queso-field__input">
        <label class="queso-checkbox" for="privacy">
            <div class="custom-checkbox-box">
                <div class="custom-checkbox-square"></div>
                <div class="custom-checkbox-checkmark">✓</div>
            </div>
            <span class="queso-checkbox__label">
                <span class="queso-checkbox__label__text"
                    >I accept the privacy policy</span
                >
            </span>
            <input
                class="queso-checkbox__native"
                type="checkbox"
                id="privacy"
                name="privacy"
            />
        </label>
    </div>
</div>
```

:::

### With Extra Attributes

::: code-group

```vue [Vue Template]
<template>
    <queso-checkbox
        name="marketing"
        label="Marketing Preferences"
        box-label="I agree to receive marketing emails"
        v-model="allowMarketing"
        :extra-attributes="{
            'data-testid': 'marketing-checkbox',
            'aria-describedby': 'marketing-help',
        }"
    />
    <div id="marketing-help" class="help-text">
        You can unsubscribe at any time
    </div>
</template>

<script setup>
import { ref } from "vue";
import { QuesoCheckbox } from "@allomambo/queso";

const allowMarketing = ref(false);
</script>
```

```html [Rendered HTML]
<div class="queso-field">
    <div class="queso-field__label">
        <span class="queso-field__label__text">Marketing Preferences</span>
    </div>
    <div class="queso-field__input">
        <label class="queso-checkbox" for="marketing">
            <span class="queso-checkbox__box">
                <span class="queso-checkbox__box__symbol">✔︎</span>
            </span>
            <span class="queso-checkbox__label">
                <span class="queso-checkbox__label__text"
                    >I agree to receive marketing emails</span
                >
            </span>
            <input
                class="queso-checkbox__native"
                type="checkbox"
                id="marketing"
                name="marketing"
                data-testid="marketing-checkbox"
                aria-describedby="marketing-help"
            />
        </label>
    </div>
</div>
<div id="marketing-help" class="help-text">You can unsubscribe at any time</div>
```

:::

### Read-only Field

::: code-group

```vue [Vue Template]
<template>
    <queso-checkbox
        name="verified"
        label="Account Status"
        box-label="Email verified"
        is-read-only
        v-model="isVerified"
    />
</template>

<script setup>
import { ref } from "vue";
import { QuesoCheckbox } from "@allomambo/queso";

const isVerified = ref(true);
</script>
```

```html [Rendered HTML]
<div class="queso-field is-read-only">
    <div class="queso-field__label">
        <span class="queso-field__label__text">Account Status</span>
    </div>
    <div class="queso-field__input">
        <div class="queso-checkbox is-checked">
            <span class="queso-checkbox__box">
                <span class="queso-checkbox__box__symbol">✔︎</span>
            </span>
            <span class="queso-checkbox__label">
                <span class="queso-checkbox__label__text">Email verified</span>
            </span>
        </div>
    </div>
</div>
```

:::

## Behavior

-   **Two-way Data Binding**: Uses Vue 3's `defineModel` for seamless `v-model` integration
-   **Form Integration**: Designed to work seamlessly with HTML forms
-   **Boolean State**: Returns `true` when checked, `false` when unchecked
-   **Read-only Mode**: When `is-read-only` is true, displays the checkbox as non-interactive
-   **Customizable Appearance**: Slots for customizing checkbox box and label appearance

## Accessibility

-   **Label Association**: Uses proper `label` element with `for` attribute
-   **Required Indicator**: Displays visual indicator for required fields
-   **Error States**: Provides clear error messaging and styling
-   **Keyboard Navigation**: Full keyboard accessibility support
-   **Screen Reader Support**: Proper ARIA attributes and semantic structure
-   **State Management**: Tracks hover and focus states for accessibility
-   **Checkbox Semantics**: Proper checkbox semantics with boolean state

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

### Checkbox

-   `.queso-checkbox` - Checkbox container
-   `.queso-checkbox.is-checked` - Checked state
-   `.queso-checkbox__box` - Checkbox box container
-   `.queso-checkbox__box__symbol` - Checkbox box symbol (checkmark)
-   `.queso-checkbox__label` - Checkbox label container
-   `.queso-checkbox__label__text` - Checkbox label text
-   `.queso-checkbox__label__required` - Checkbox label required indicator

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

export type QuesoCheckboxModel = boolean;

export interface QuesoCheckboxProps {
    name: string;
    label?: string;
    id?: string;
    boxLabel: string;
    isRequired?: boolean;
    isDisabled?: boolean;
    isReadOnly?: boolean;
    isError?: boolean;
    extraAttributes?: Record<string, string>;
}
```
