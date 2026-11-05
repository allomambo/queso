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
-   **Description:** Additional HTML attributes to apply to the native `<select>` element (form data, autofill, test ids). This element is hidden from assistive technologies, so ARIA attributes set here are not announced.

### `ariaLabel`

-   **Type:** `string`
-   **Required:** `false`
-   **Description:** Accessible name of the combobox when the field has no `label`. Ignored when `label` is set.

### `ariaLabelledby`

-   **Type:** `string`
-   **Required:** `false`
-   **Description:** Id of an element naming the combobox when the field has no `label` (e.g. a heading or a visually hidden label elsewhere). Ignored when `label` is set.

::: warning Accessible name
A select needs a name. Set `label`, or `ariaLabel` / `ariaLabelledby` when the label is displayed elsewhere.
:::

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

-   **Props:** `ExposedData & { index: number, value: string, label: string, data?: TOptionData, isSelected: boolean, isFocused: boolean }`
-   **Description:** Custom dropdown item content. Defaults to displaying the option label. `isFocused` is `true` for the option highlighted by the keyboard.

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
<div class="queso-field -select">
    <label class="queso-field__label" id="language-label" for="language">
        <span class="queso-field__label__text">Programming Language</span>
    </label>
    <div class="queso-field__input">
        <div class="queso-dropdown is-dropdown-close queso-select">
            <div
                class="queso-dropdown__selector"
                role="combobox"
                aria-haspopup="listbox"
                aria-expanded="false"
                aria-controls="queso-dropdown__v-0"
                aria-labelledby="language-label"
                tabindex="0"
            >
                <div class="queso-dropdown__selector__text">
                    <div class="queso-dropdown__selector__text__placeholder">
                        Choose a language
                    </div>
                </div>
                <div class="queso-dropdown__selector__icon">+</div>
            </div>
            <div class="queso-dropdown__popover" inert>
                <div class="queso-dropdown__popover__scroll">
                    <ul
                        class="queso-dropdown__popover__options-list"
                        role="listbox"
                        id="queso-dropdown__v-0"
                        aria-labelledby="language-label"
                        tabindex="-1"
                    >
                        <li
                            class="queso-dropdown__popover__options-list__item"
                            role="option"
                            id="queso-dropdown__v-0-option-0"
                            aria-selected="false"
                        >
                            <span class="text">JavaScript</span>
                        </li>
                        <!-- One li per option -->
                    </ul>
                </div>
            </div>
            <select
                class="queso-select__select-native"
                id="language"
                name="language"
                aria-hidden="true"
                tabindex="-1"
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
<div class="queso-field -select">
    <label class="queso-field__label" id="theme-label" for="theme">
        <span class="queso-field__label__text">Theme</span>
    </label>
    <div class="queso-field__input">
        <div class="queso-dropdown is-dropdown-close queso-select">
            <div
                class="queso-dropdown__selector"
                role="combobox"
                aria-haspopup="listbox"
                aria-expanded="false"
                aria-controls="queso-dropdown__v-0"
                aria-labelledby="theme-label"
                tabindex="0"
            >
                <div class="custom-selector">
                    <span class="placeholder-text">Select a theme</span>
                </div>
            </div>
            <!-- Popover with the listbox, see the first example -->
            <select
                class="queso-select__select-native"
                id="theme"
                name="theme"
                aria-hidden="true"
                tabindex="-1"
            >
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
            autocomplete: 'off',
        }"
    />
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
<div class="queso-field -select">
    <label class="queso-field__label" id="category-label" for="category">
        <span class="queso-field__label__text">Product Category</span>
    </label>
    <div class="queso-field__input">
        <div class="queso-dropdown is-dropdown-close queso-select">
            <!-- Combobox and popover, see the first example -->
            <select
                class="queso-select__select-native"
                id="category"
                name="category"
                aria-hidden="true"
                tabindex="-1"
                data-testid="category-select"
                autocomplete="off"
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
<div class="queso-field -select is-read-only">
    <label class="queso-field__label" id="status-label" for="status">
        <span class="queso-field__label__text">Account Status</span>
    </label>
    <div class="queso-field__input">
        <div class="queso-select__read-only">
            <span class="queso-select__read-only__label">Active</span>
        </div>
    </div>
</div>
```

:::

### Without Visible Label

When the label is displayed elsewhere (a filter heading, a sort bar…), name the combobox with `ariaLabel` or `ariaLabelledby`:

```vue
<template>
    <span id="sort-label" class="visually-hidden">Sort by</span>
    <queso-select
        name="sort"
        :options="sortOptions"
        aria-labelledby="sort-label"
        v-model="sort"
    />
</template>
```

## Behavior

-   **Two-way Data Binding**: Uses Vue 3's `defineModel` for seamless `v-model` integration
-   **Form Integration**: A hidden native `<select>` carries the value, `name`, `required` and `disabled` for form submission and validation
-   **Single Selection**: Only one option can be selected at a time
-   **Read-only Mode**: When `is-read-only` is true, displays the selected value as non-interactive text
-   **Customizable Appearance**: Slots for customizing dropdown selector, icon, and item appearance
-   **Dropdown Integration**: Built on top of `QuesoDropdown`, which follows the WAI-ARIA [select-only combobox pattern](https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-select-only/) (see its keyboard support)

## Accessibility

-   **Accessible Name**: The combobox and the listbox are labelled by the field label (`aria-labelledby="{fieldID}-label"`), or by `ariaLabel` / `ariaLabelledby` when there is no label
-   **States**: `isRequired`, `isError` and `isDisabled` set `aria-required`, `aria-invalid` and `aria-disabled` on the combobox. The `*` required indicator is hidden from screen readers since `aria-required` already announces it
-   **Native Select**: Hidden from assistive technologies (`aria-hidden="true"`, `tabindex="-1"`). The `label` still points to it with `for`, and focus reaching it (label click, form validation) moves to the combobox
-   **Keyboard Navigation**: Arrow keys, Home/End, Enter/Space, Escape and type-to-select, with the highlighted option exposed through `aria-activedescendant`
-   **Active State**: `.is-active` stays on the field while focus is anywhere inside the dropdown

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
    fieldLabelID: string | undefined; // `${fieldID}-label` when a label is set
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
    ariaLabel?: string;
    ariaLabelledby?: string;
}
```
