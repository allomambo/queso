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

-   **Props:** `ExposedData & { isDropdownOpen: boolean, activeOptions: QuesoSelectMultipleOptions<TOptionData> }`
-   **Description:** Custom selector content showing the selected option(s). Defaults to displaying the selected option labels.

### `icon`

-   **Props:** `ExposedData & { isDropdownOpen: boolean }`
-   **Description:** Custom dropdown icon. Defaults to "+".

-   **Props:** `ExposedData & { index: number, value: string, label: string, data?: TOptionData }`
-   **Description:** Custom dropdown item content. Defaults to displaying the option label.

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
<div class="queso-field">
    <div class="queso-field__label">
        <span class="queso-field__label__text">Skills</span>
    </div>
    <div class="queso-field__input">
        <div class="queso-dropdown queso-select">
            <div class="queso-dropdown__selector">
                <span class="queso-dropdown__selector__placeholder"
                    >Choose skills</span
                >
                <span class="queso-dropdown__selector__icon">+</span>
            </div>
            <select
                class="queso-select__select-native"
                id="skills"
                name="skills"
                multiple
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
<div class="queso-field">
    <div class="queso-field__label">
        <span class="queso-field__label__text">Product Categories</span>
    </div>
    <div class="queso-field__input">
        <div class="queso-dropdown queso-select">
            <div class="queso-dropdown__selector">
                <div class="custom-selector">
                    <span class="placeholder-text">Select categories</span>
                </div>
                <span class="custom-icon">+</span>
            </div>
            <select
                class="queso-select__select-native"
                id="categories"
                name="categories"
                multiple
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
            'aria-describedby': 'permissions-help',
        }"
    />
    <div id="permissions-help" class="help-text">
        Select the permissions you want to grant to this user
    </div>
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
<div class="queso-field">
    <div class="queso-field__label">
        <span class="queso-field__label__text">User Permissions</span>
    </div>
    <div class="queso-field__input">
        <div class="queso-dropdown queso-select">
            <div class="queso-dropdown__selector">
                <span class="queso-dropdown__selector__placeholder"
                    >Select permissions</span
                >
                <span class="queso-dropdown__selector__icon">+</span>
            </div>
            <select
                class="queso-select__select-native"
                id="permissions"
                name="permissions"
                multiple
                data-testid="permissions-select"
                aria-describedby="permissions-help"
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
<div id="permissions-help" class="help-text">
    Select the permissions you want to grant to this user
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
<div class="queso-field is-read-only">
    <div class="queso-field__label">
        <span class="queso-field__label__text">User Roles</span>
    </div>
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
-   **Form Integration**: Designed to work seamlessly with HTML forms
-   **Multiple Selection**: Multiple options can be selected simultaneously
-   **Read-only Mode**: When `is-read-only` is true, displays the selected values as non-interactive text
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

::: info 🎨
The styles for the select component come from the `QuesoSelect` component. See the [CSS Classes section in QuesoSelect](/components/select#select) for detailed styling information.
:::

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
}
```
