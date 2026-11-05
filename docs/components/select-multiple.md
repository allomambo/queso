# QuesoSelectMultiple

A multiple select dropdown component that supports multiple selections from a list of options, two-way data binding with `v-model`, and provides a consistent interface for form inputs. All form field components share the same base structure for consistent styling and behavior across your application.

## Basic Usage

```vue
<template>
    <queso-select-multiple
        name="tags"
        label="Tags"
        :options="tagOptions"
        placeholder="Select tags"
        v-model="selectedTags"
    />
</template>

<script setup>
import { ref } from "vue";
import { QuesoSelectMultiple } from "@allomambo/queso";

const selectedTags = ref([]);
const tagOptions = [
    { label: "Vue.js", value: "vue" },
    { label: "React", value: "react" },
    { label: "Angular", value: "angular" },
    { label: "Svelte", value: "svelte" },
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

-   **Type:** `QuesoSelectMultipleOptions<TOptionData>`
-   **Required:** `true`
-   **Description:** Array of options for the select dropdown. Each option must have a `label` and `value`. `TOptionData` matches the dropdown option data payload and defaults to `Record<string, any>` so slot props stay typed.

### `placeholder`

-   **Type:** `string`
-   **Required:** `false`
-   **Description:** Placeholder text displayed when no options are selected.

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
-   **Description:** Additional HTML attributes to apply to the native `<select multiple>` element (form data, autofill, test ids). This element is hidden from assistive technologies, so ARIA attributes set here are not announced.

### `ariaLabel`

-   **Type:** `string`
-   **Required:** `false`
-   **Description:** Accessible name of the combobox when the field has no `label`. Ignored when `label` is set.

### `ariaLabelledby`

-   **Type:** `string`
-   **Required:** `false`
-   **Description:** Id of an element naming the combobox when the field has no `label`. Ignored when `label` is set.

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

-   **Props:** `ExposedData & { isDropdownOpen: boolean, activeOptions: QuesoSelectMultipleOptions<TOptionData> }`
-   **Description:** Custom selector content showing the selected option(s). Defaults to displaying the selected option labels.

### `icon`

-   **Props:** `ExposedData & { isDropdownOpen: boolean }`
-   **Description:** Custom dropdown icon. Defaults to "+".

### `item`

-   **Props:** `ExposedData & { index: number, value: string, label: string, data?: TOptionData, isSelected: boolean, isFocused: boolean }`
-   **Description:** Custom dropdown item content. Defaults to displaying the option label. `isFocused` is `true` for the option highlighted by the keyboard.

### `readOnly`

-   **Props:** `ExposedData`
-   **Description:** Content displayed when the field is in read-only mode. Defaults to displaying the selected values as text.

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
    <queso-select-multiple
        name="skills"
        label="Skills"
        :options="skillOptions"
        placeholder="Choose skills"
        v-model="selectedSkills"
    />
</template>

<script setup lang="ts">
import { ref } from "vue";
import { QuesoSelectMultiple } from "@allomambo/queso";
import type {
    QuesoSelectMultipleModel,
    QuesoSelectMultipleOptions,
} from "@allomambo/queso";

const selectedSkills = ref<QuesoSelectMultipleModel>([]);
const skillOptions: QuesoSelectMultipleOptions = [
    { label: "JavaScript", value: "js" },
    { label: "TypeScript", value: "ts" },
    { label: "Vue.js", value: "vue" },
    { label: "React", value: "react" },
    { label: "Node.js", value: "node" },
];
</script>
```

```html [Rendered HTML]
<div class="queso-field -select-multiple">
    <label class="queso-field__label" id="skills-label" for="skills">
        <span class="queso-field__label__text">Skills</span>
    </label>
    <div class="queso-field__input">
        <div class="queso-dropdown is-multiple is-dropdown-close queso-select">
            <div
                class="queso-dropdown__selector"
                role="combobox"
                aria-haspopup="listbox"
                aria-expanded="false"
                aria-controls="queso-dropdown__v-0"
                aria-labelledby="skills-label"
                tabindex="0"
            >
                <div class="queso-dropdown__selector__text">
                    <div class="queso-dropdown__selector__text__placeholder">
                        Choose skills
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
                        aria-labelledby="skills-label"
                        aria-multiselectable="true"
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
                id="skills"
                name="skills"
                multiple
                aria-hidden="true"
                tabindex="-1"
            >
                <option></option>
                <option value="js">JavaScript</option>
                <option value="ts">TypeScript</option>
                <option value="vue">Vue.js</option>
                <option value="react">React</option>
                <option value="node">Node.js</option>
            </select>
        </div>
    </div>
</div>
```

:::

### Custom Selector with Multiple Options

::: code-group

```vue [Vue Template]
<template>
    <queso-select-multiple
        name="categories"
        label="Product Categories"
        :options="categoryOptions"
        placeholder="Select categories"
        v-model="selectedCategories"
    >
        <template #selector="{ isDropdownOpen, activeOptions }">
            <div class="custom-selector">
                <span v-if="activeOptions.length > 0" class="selected-options">
                    {{ activeOptions.map((opt) => opt.label).join(", ") }}
                </span>
                <span v-else class="placeholder-text">Select categories</span>
            </div>
        </template>
        <template #icon="{ isDropdownOpen }">
            <span class="custom-icon">{{ isDropdownOpen ? "−" : "+" }}</span>
        </template>
    </queso-select-multiple>
</template>

<script setup>
import { ref } from "vue";
import { QuesoSelectMultiple } from "@allomambo/queso";

const selectedCategories = ref([]);
const categoryOptions = [
    { label: "Electronics", value: "electronics" },
    { label: "Clothing", value: "clothing" },
    { label: "Books", value: "books" },
    { label: "Home & Garden", value: "home" },
];
</script>
```

```html [Rendered HTML]
<div class="queso-field -select-multiple">
    <label class="queso-field__label" id="categories-label" for="categories">
        <span class="queso-field__label__text">Product Categories</span>
    </label>
    <div class="queso-field__input">
        <div class="queso-dropdown is-multiple is-dropdown-close queso-select">
            <div
                class="queso-dropdown__selector"
                role="combobox"
                aria-haspopup="listbox"
                aria-expanded="false"
                aria-controls="queso-dropdown__v-0"
                aria-labelledby="categories-label"
                tabindex="0"
            >
                <div class="custom-selector">
                    <span class="placeholder-text">Select categories</span>
                </div>
            </div>
            <!-- Popover with the listbox, see the first example -->
            <select
                class="queso-select__select-native"
                id="categories"
                name="categories"
                multiple
                aria-hidden="true"
                tabindex="-1"
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

### With Extra Attributes

::: code-group

```vue [Vue Template]
<template>
    <queso-select-multiple
        name="permissions"
        label="User Permissions"
        :options="permissionOptions"
        placeholder="Select permissions"
        v-model="selectedPermissions"
        :extra-attributes="{
            'data-testid': 'permissions-select',
            autocomplete: 'off',
        }"
    />
</template>

<script setup>
import { ref } from "vue";
import { QuesoSelectMultiple } from "@allomambo/queso";

const selectedPermissions = ref([]);
const permissionOptions = [
    { label: "Read", value: "read" },
    { label: "Write", value: "write" },
    { label: "Delete", value: "delete" },
    { label: "Admin", value: "admin" },
];
</script>
```

```html [Rendered HTML]
<div class="queso-field -select-multiple">
    <label class="queso-field__label" id="permissions-label" for="permissions">
        <span class="queso-field__label__text">User Permissions</span>
    </label>
    <div class="queso-field__input">
        <div class="queso-dropdown is-multiple is-dropdown-close queso-select">
            <!-- Combobox and popover, see the first example -->
            <select
                class="queso-select__select-native"
                id="permissions"
                name="permissions"
                multiple
                aria-hidden="true"
                tabindex="-1"
                data-testid="permissions-select"
                autocomplete="off"
            >
                <option></option>
                <option value="read">Read</option>
                <option value="write">Write</option>
                <option value="delete">Delete</option>
                <option value="admin">Admin</option>
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
    <queso-select-multiple
        name="roles"
        label="User Roles"
        :options="roleOptions"
        placeholder="Select roles"
        is-read-only
        v-model="userRoles"
    />
</template>

<script setup>
import { ref } from "vue";
import { QuesoSelectMultiple } from "@allomambo/queso";

const userRoles = ref(["admin", "moderator"]);
const roleOptions = [
    { label: "User", value: "user" },
    { label: "Moderator", value: "moderator" },
    { label: "Admin", value: "admin" },
    { label: "Super Admin", value: "super-admin" },
];
</script>
```

```html [Rendered HTML]
<div class="queso-field -select-multiple is-read-only">
    <label class="queso-field__label" id="roles-label" for="roles">
        <span class="queso-field__label__text">User Roles</span>
    </label>
    <div class="queso-field__input">
        <div class="queso-select__read-only">
            <span class="queso-select__read-only__label">Admin, Moderator</span>
        </div>
    </div>
</div>
```

:::

## Behavior

-   **Two-way Data Binding**: Uses Vue 3's `defineModel` for seamless `v-model` integration
-   **Form Integration**: A hidden native `<select multiple>` carries the values, `name`, `required` and `disabled` for form submission and validation
-   **Multiple Selection**: Multiple options can be selected simultaneously; Enter and Space toggle the highlighted option and keep the list open
-   **Read-only Mode**: When `is-read-only` is true, displays the selected values as non-interactive text
-   **Customizable Appearance**: Slots for customizing dropdown selector, icon, and item appearance
-   **Dropdown Integration**: Built on top of `QuesoDropdown`, which follows the WAI-ARIA [select-only combobox pattern](https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-select-only/) (see its keyboard support)

## Accessibility

-   **Accessible Name**: The combobox and the listbox are labelled by the field label (`aria-labelledby="{fieldID}-label"`), or by `ariaLabel` / `ariaLabelledby` when there is no label
-   **Multiple Selection**: The listbox has `aria-multiselectable="true"` and each option exposes `aria-selected`
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

::: info 🎨
The styles for the select component come from the `QuesoSelect` component. See the [CSS Classes section in QuesoSelect](/components/select#select) for detailed styling information.
:::

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

export type QuesoSelectMultipleOption<TOptionData = Record<string, any>> =
    QuesoDropdownOption<TOptionData>;
export type QuesoSelectMultipleOptions<TOptionData = Record<string, any>> =
    QuesoDropdownOptions<TOptionData>;
export type QuesoSelectMultipleModel = QuesoDropdownModel;

export interface QuesoSelectMultipleProps<TOptionData = Record<string, any>> {
    name: string;
    label?: string;
    id?: string;
    options: QuesoSelectMultipleOptions<TOptionData>;
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
