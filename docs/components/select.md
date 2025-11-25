# QuesoSelect

A single select dropdown component that supports single selection from a list of options, two-way data binding with `v-model`, and provides a consistent interface for form inputs. All form field components share the same base structure for consistent styling and behavior across your application.

## Basic Usage

```vue
<template>
    <queso-select
        name="country"
        label="Country"
        :options="countryOptions"
        placeholder="Select a country"
        v-model="selectedCountry"
    />
</template>

<script setup>
import { ref } from "vue";
import { QuesoSelect } from "@allomambo/queso";

const selectedCountry = ref("");
const countryOptions = [
    { label: "United States", value: "us" },
    { label: "Canada", value: "ca" },
    { label: "United Kingdom", value: "uk" },
    { label: "France", value: "fr" },
];
</script>
```

## Props

### `name`

-   **Type:** `string`
-   **Required:** `true`
-   **Description:** The name attribute for the select field.

### `label`

-   **Type:** `string`
-   **Required:** `false`
-   **Description:** The label text displayed above the select field.

### `id`

-   **Type:** `string`
-   **Required:** `false`
-   **Description:** The ID attribute for the select field (defaults to `name` if not provided).

### `options`

-   **Type:** `QuesoSelectOptions<TOptionData>`
-   **Required:** `true`
-   **Description:** Array of options for the select dropdown. Each option must have a `label` and `value`. `TOptionData` mirrors the dropdown option type and defaults to `Record<string, any>`, so slot props receive a fully typed `data` object.

### `placeholder`

-   **Type:** `string`
-   **Required:** `false`
-   **Description:** Placeholder text displayed when no option is selected.

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
-   **Description:** Additional HTML attributes to apply to the select input element.

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
-   **Description:** Content displayed before the select field.

### `placeholder`

-   **Props:** `ExposedData & { isDropdownOpen: boolean, placeholder: string }`
-   **Description:** Custom placeholder content. Defaults to the `placeholder` prop.

### `selector`

-   **Props:** `ExposedData & { isDropdownOpen: boolean, activeOptions: QuesoSelectOptions<TOptionData> }`
-   **Description:** Custom selector content showing the selected option(s). Defaults to displaying the selected option label.

### `icon`

-   **Props:** `ExposedData & { isDropdownOpen: boolean }`
-   **Description:** Custom dropdown icon. Defaults to "+".

### `item`

-   **Props:** `ExposedData & { index: number, value: string, label: string, data?: TOptionData, isSelected: boolean }`
-   **Description:** Custom dropdown item content. Defaults to displaying the option label.

### `readOnly`

-   **Props:** `ExposedData`
-   **Description:** Content displayed when the field is in read-only mode. Defaults to displaying the selected value as text.

### `afterDropdown`

-   **Props:** `ExposedData`
-   **Description:** Content displayed after the dropdown component (typically for hidden native select element).

### `afterInput`

-   **Props:** `ExposedData`
-   **Description:** Content displayed after the select field.

### `error`

-   **Props:** `ExposedData`
-   **Description:** Content displayed when the field has an error state.

## Examples

### Basic TypeScript Support

::: code-group

```vue [Vue Template]
<template>
    <queso-select
        name="language"
        label="Programming Language"
        :options="languageOptions"
        placeholder="Choose a language"
        v-model="selectedLanguage"
    />
</template>

<script setup lang="ts">
import { ref } from "vue";
import { QuesoSelect } from "@allomambo/queso";
import type { QuesoSelectModel, QuesoSelectOptions } from "@allomambo/queso";

const selectedLanguage = ref<QuesoSelectModel>("");
const languageOptions: QuesoSelectOptions = [
    { label: "JavaScript", value: "js" },
    { label: "TypeScript", value: "ts" },
    { label: "Python", value: "python" },
    { label: "Go", value: "go" },
];
</script>
```

```html [Rendered HTML]
<div class="queso-field">
    <div class="queso-field__label">
        <span class="queso-field__label__text">Programming Language</span>
    </div>
    <div class="queso-field__input">
        <div class="queso-dropdown queso-select">
            <div class="queso-dropdown__selector">
                <span class="queso-dropdown__selector__placeholder"
                    >Choose a language</span
                >
                <span class="queso-dropdown__selector__icon">+</span>
            </div>
            <select
                class="queso-select__select-native"
                id="language"
                name="language"
            >
                <option></option>
                <option value="js">JavaScript</option>
                <option value="ts">TypeScript</option>
                <option value="python">Python</option>
                <option value="go">Go</option>
            </select>
        </div>
    </div>
</div>
```

:::

### Custom Selector

::: code-group

```vue [Vue Template]
<template>
    <queso-select
        name="theme"
        label="Theme"
        :options="themeOptions"
        placeholder="Select a theme"
        v-model="selectedTheme"
    >
        <template #selector="{ isDropdownOpen, activeOptions }">
            <div class="custom-selector">
                <span v-if="activeOptions.length > 0" class="selected-option">
                    {{ activeOptions[0].label }}
                </span>
                <span v-else class="placeholder-text">Select a theme</span>
            </div>
        </template>
        <template #icon="{ isDropdownOpen }">
            <span class="custom-icon">{{ isDropdownOpen ? "−" : "+" }}</span>
        </template>
    </queso-select>
</template>

<script setup>
import { ref } from "vue";
import { QuesoSelect } from "@allomambo/queso";

const selectedTheme = ref("");
const themeOptions = [
    { label: "Light", value: "light" },
    { label: "Dark", value: "dark" },
    { label: "Auto", value: "auto" },
];
</script>
```

```html [Rendered HTML]
<div class="queso-field">
    <div class="queso-field__label">
        <span class="queso-field__label__text">Theme</span>
    </div>
    <div class="queso-field__input">
        <div class="queso-dropdown queso-select">
            <div class="queso-dropdown__selector">
                <div class="custom-selector">
                    <span class="placeholder-text">Select a theme</span>
                </div>
                <span class="custom-icon">+</span>
            </div>
            <select class="queso-select__select-native" id="theme" name="theme">
                <option></option>
                <option value="light">Light</option>
                <option value="dark">Dark</option>
                <option value="auto">Auto</option>
            </select>
        </div>
    </div>
</div>
```

:::

### With Extra Attributes

::: code-group

```vue [Vue Template]
<template>
    <queso-select
        name="category"
        label="Product Category"
        :options="categoryOptions"
        placeholder="Choose a category"
        v-model="selectedCategory"
        :extra-attributes="{
            'data-testid': 'category-select',
            'aria-describedby': 'category-help',
        }"
    />
    <div id="category-help" class="help-text">
        Select the category that best describes your product
    </div>
</template>

<script setup>
import { ref } from "vue";
import { QuesoSelect } from "@allomambo/queso";

const selectedCategory = ref("");
const categoryOptions = [
    { label: "Electronics", value: "electronics" },
    { label: "Clothing", value: "clothing" },
    { label: "Books", value: "books" },
    { label: "Home & Garden", value: "home" },
];
</script>
```

```html [Rendered HTML]
<div class="queso-field">
    <div class="queso-field__label">
        <span class="queso-field__label__text">Product Category</span>
    </div>
    <div class="queso-field__input">
        <div class="queso-dropdown queso-select">
            <div class="queso-dropdown__selector">
                <span class="queso-dropdown__selector__placeholder"
                    >Choose a category</span
                >
                <span class="queso-dropdown__selector__icon">+</span>
            </div>
            <select
                class="queso-select__select-native"
                id="category"
                name="category"
                data-testid="category-select"
                aria-describedby="category-help"
            >
                <option></option>
                <option value="electronics">Electronics</option>
                <option value="clothing">Clothing</option>
                <option value="books">Books</option>
                <option value="home">Home & Garden</option>
            </select>
        </div>
    </div>
</div>
<div id="category-help" class="help-text">
    Select the category that best describes your product
</div>
```

:::

### Read-only Field

::: code-group

```vue [Vue Template]
<template>
    <queso-select
        name="status"
        label="Account Status"
        :options="statusOptions"
        placeholder="Select status"
        is-read-only
        v-model="accountStatus"
    />
</template>

<script setup>
import { ref } from "vue";
import { QuesoSelect } from "@allomambo/queso";

const accountStatus = ref("active");
const statusOptions = [
    { label: "Active", value: "active" },
    { label: "Inactive", value: "inactive" },
    { label: "Suspended", value: "suspended" },
];
</script>
```

```html [Rendered HTML]
<div class="queso-field is-read-only">
    <div class="queso-field__label">
        <span class="queso-field__label__text">Account Status</span>
    </div>
    <div class="queso-field__input">
        <div class="queso-select__read-only">
            <span class="queso-select__read-only__label">Active</span>
        </div>
    </div>
</div>
```

:::

## Behavior

-   **Two-way Data Binding**: Uses Vue 3's `defineModel` for seamless `v-model` integration
-   **Form Integration**: Designed to work seamlessly with HTML forms
-   **Single Selection**: Only one option can be selected at a time
-   **Read-only Mode**: When `is-read-only` is true, displays the selected value as non-interactive text
-   **Customizable Appearance**: Slots for customizing dropdown selector, icon, and item appearance
-   **Dropdown Integration**: Built on top of `QuesoDropdown` component for enhanced functionality

## Accessibility

-   **Label Association**: Uses proper `label` element with `for` attribute
-   **Required Indicator**: Displays visual indicator for required fields
-   **Error States**: Provides clear error messaging and styling
-   **Keyboard Navigation**: Full keyboard accessibility support
-   **Screen Reader Support**: Proper ARIA attributes and semantic structure
-   **State Management**: Tracks hover and focus states for accessibility
-   **Select Semantics**: Proper select semantics with native select element

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

### Select

-   `.queso-select` - Select container
-   `.queso-select__read-only` - Read-only display container
-   `.queso-select__read-only__label` - Read-only label text

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

export type QuesoSelectOption<TOptionData = Record<string, any>> =
    QuesoDropdownOption<TOptionData>;
export type QuesoSelectOptions<TOptionData = Record<string, any>> =
    QuesoDropdownOptions<TOptionData>;

export type QuesoSelectModel = QuesoDropdownOptionValue;

export interface QuesoSelectProps<TOptionData = Record<string, any>> {
    name: string;
    label?: string;
    id?: string;
    options: QuesoSelectOptions<TOptionData>;
    placeholder?: string;
    isRequired?: boolean;
    isDisabled?: boolean;
    isReadOnly?: boolean;
    isError?: boolean;
    extraAttributes?: Record<string, string>;
}
```
