# QuesoCheckboxMultiple

A multiple checkbox group component that supports multiple selections from a list of choices, two-way data binding with `v-model`, and provides a consistent interface for form inputs. All form field components share the same base structure for consistent styling and behavior across your application.

## Basic Usage

```vue
<template>
    <queso-checkbox-multiple
        name="interests"
        label="Interests"
        :choices="interestChoices"
        v-model="selectedInterests"
    />
</template>

<script setup>
import { ref } from "vue";
import { QuesoCheckboxMultiple } from "@allomambo/queso";

const selectedInterests = ref([]);
const interestChoices = [
    { label: "Technology", value: "tech" },
    { label: "Sports", value: "sports" },
    { label: "Music", value: "music" },
    { label: "Travel", value: "travel" },
];
</script>
```

## Props

### `name`

-   **Type:** `string`
-   **Required:** `true`
-   **Description:** The name attribute for the checkbox group field.

### `label`

-   **Type:** `string`
-   **Required:** `false`
-   **Description:** The label text displayed above the checkbox group.

### `id`

-   **Type:** `string`
-   **Required:** `false`
-   **Description:** The ID attribute for the checkbox group field (defaults to `name` if not provided).

### `choices`

-   **Type:** `QuesoCheckboxMultipleChoices`
-   **Required:** `true`
-   **Description:** Array of choices for the checkbox group. Each choice must have a `label` and `value`.

### `validationMessage`

-   **Type:** `string`
-   **Default:** `"Please select at least one option"`
-   **Description:** Custom validation message when no options are selected and the field is required.

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
-   **Description:** Additional HTML attributes to apply to each checkbox input element.

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
-   **Description:** Content displayed before the checkbox group field.

### `checkboxBox`

-   **Props:** `{}`
-   **Description:** Custom checkbox box element for each choice. Defaults to a styled checkbox box.

### `checkboxBoxSymbol`

-   **Props:** `{}`
-   **Description:** Symbol displayed inside the checkbox box when checked. Defaults to "✔︎".

### `checkboxLabel`

-   **Props:** `{}`
-   **Description:** Custom label element for each choice. Defaults to the choice label.

### `afterInput`

-   **Props:** `ExposedData`
-   **Description:** Content displayed after the checkbox group field.

### `error`

-   **Props:** `ExposedData`
-   **Description:** Content displayed when the field has an error state.

## Examples

### Basic TypeScript Support

::: code-group

```vue [Vue Template]
<template>
    <queso-checkbox-multiple
        name="skills"
        label="Skills"
        :choices="skillChoices"
        v-model="selectedSkills"
    />
</template>

<script setup lang="ts">
import { ref } from "vue";
import { QuesoCheckboxMultiple } from "@allomambo/queso";
import type {
    QuesoCheckboxMultipleModel,
    QuesoCheckboxMultipleChoices,
} from "@allomambo/queso";

const selectedSkills = ref<QuesoCheckboxMultipleModel>([]);
const skillChoices: QuesoCheckboxMultipleChoices = [
    { label: "JavaScript", value: "js" },
    { label: "TypeScript", value: "ts" },
    { label: "Vue.js", value: "vue" },
    { label: "React", value: "react" },
];
</script>
```

```html [Rendered HTML]
<div class="queso-field">
    <div class="queso-field__label">
        <span class="queso-field__label__text">Skills</span>
    </div>
    <div class="queso-field__input">
        <label class="queso-checkbox" for="skills-js">
            <span class="queso-checkbox__box">
                <span class="queso-checkbox__box__symbol">✔︎</span>
            </span>
            <span class="queso-checkbox__label">
                <span class="queso-checkbox__label__text">JavaScript</span>
            </span>
            <input
                class="queso-checkbox__native"
                type="checkbox"
                id="skills-js"
                name="skills[]"
                value="js"
            />
        </label>
        <label class="queso-checkbox" for="skills-ts">
            <span class="queso-checkbox__box">
                <span class="queso-checkbox__box__symbol">✔︎</span>
            </span>
            <span class="queso-checkbox__label">
                <span class="queso-checkbox__label__text">TypeScript</span>
            </span>
            <input
                class="queso-checkbox__native"
                type="checkbox"
                id="skills-ts"
                name="skills[]"
                value="ts"
            />
        </label>
        <label class="queso-checkbox" for="skills-vue">
            <span class="queso-checkbox__box">
                <span class="queso-checkbox__box__symbol">✔︎</span>
            </span>
            <span class="queso-checkbox__label">
                <span class="queso-checkbox__label__text">Vue.js</span>
            </span>
            <input
                class="queso-checkbox__native"
                type="checkbox"
                id="skills-vue"
                name="skills[]"
                value="vue"
            />
        </label>
        <label class="queso-checkbox" for="skills-react">
            <span class="queso-checkbox__box">
                <span class="queso-checkbox__box__symbol">✔︎</span>
            </span>
            <span class="queso-checkbox__label">
                <span class="queso-checkbox__label__text">React</span>
            </span>
            <input
                class="queso-checkbox__native"
                type="checkbox"
                id="skills-react"
                name="skills[]"
                value="react"
            />
        </label>
    </div>
</div>
```

:::

### With Validation

::: code-group

```vue [Vue Template]
<template>
    <queso-checkbox-multiple
        name="categories"
        label="Product Categories"
        :choices="categoryChoices"
        is-required
        validation-message="Please select at least one category"
        v-model="selectedCategories"
    />
</template>

<script setup>
import { ref } from "vue";
import { QuesoCheckboxMultiple } from "@allomambo/queso";

const selectedCategories = ref([]);
const categoryChoices = [
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
        <span class="queso-field__label__required">*</span>
    </div>
    <div class="queso-field__input">
        <label class="queso-checkbox" for="categories-electronics">
            <span class="queso-checkbox__box">
                <span class="queso-checkbox__box__symbol">✔︎</span>
            </span>
            <span class="queso-checkbox__label">
                <span class="queso-checkbox__label__text">Electronics</span>
            </span>
            <input
                class="queso-checkbox__native"
                type="checkbox"
                id="categories-electronics"
                name="categories[]"
                value="electronics"
                required
            />
        </label>
        <label class="queso-checkbox" for="categories-clothing">
            <span class="queso-checkbox__box">
                <span class="queso-checkbox__box__symbol">✔︎</span>
            </span>
            <span class="queso-checkbox__label">
                <span class="queso-checkbox__label__text">Clothing</span>
            </span>
            <input
                class="queso-checkbox__native"
                type="checkbox"
                id="categories-clothing"
                name="categories[]"
                value="clothing"
                required
            />
        </label>
        <label class="queso-checkbox" for="categories-books">
            <span class="queso-checkbox__box">
                <span class="queso-checkbox__box__symbol">✔︎</span>
            </span>
            <span class="queso-checkbox__label">
                <span class="queso-checkbox__label__text">Books</span>
            </span>
            <input
                class="queso-checkbox__native"
                type="checkbox"
                id="categories-books"
                name="categories[]"
                value="books"
                required
            />
        </label>
        <label class="queso-checkbox" for="categories-home">
            <span class="queso-checkbox__box">
                <span class="queso-checkbox__box__symbol">✔︎</span>
            </span>
            <span class="queso-checkbox__label">
                <span class="queso-checkbox__label__text">Home & Garden</span>
            </span>
            <input
                class="queso-checkbox__native"
                type="checkbox"
                id="categories-home"
                name="categories[]"
                value="home"
                required
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
    <queso-checkbox-multiple
        name="permissions"
        label="User Permissions"
        :choices="permissionChoices"
        v-model="selectedPermissions"
        :extra-attributes="{
            'data-testid': 'permission-checkbox',
            'aria-describedby': 'permissions-help',
        }"
    />
    <div id="permissions-help" class="help-text">
        Select the permissions you want to grant to this user
    </div>
</template>

<script setup>
import { ref } from "vue";
import { QuesoCheckboxMultiple } from "@allomambo/queso";

const selectedPermissions = ref([]);
const permissionChoices = [
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
        <label class="queso-checkbox" for="permissions-read">
            <span class="queso-checkbox__box">
                <span class="queso-checkbox__box__symbol">✔︎</span>
            </span>
            <span class="queso-checkbox__label">
                <span class="queso-checkbox__label__text">Read</span>
            </span>
            <input
                class="queso-checkbox__native"
                type="checkbox"
                id="permissions-read"
                name="permissions[]"
                value="read"
                data-testid="permission-checkbox"
                aria-describedby="permissions-help"
            />
        </label>
        <label class="queso-checkbox" for="permissions-write">
            <span class="queso-checkbox__box">
                <span class="queso-checkbox__box__symbol">✔︎</span>
            </span>
            <span class="queso-checkbox__label">
                <span class="queso-checkbox__label__text">Write</span>
            </span>
            <input
                class="queso-checkbox__native"
                type="checkbox"
                id="permissions-write"
                name="permissions[]"
                value="write"
                data-testid="permission-checkbox"
                aria-describedby="permissions-help"
            />
        </label>
        <label class="queso-checkbox" for="permissions-delete">
            <span class="queso-checkbox__box">
                <span class="queso-checkbox__box__symbol">✔︎</span>
            </span>
            <span class="queso-checkbox__label">
                <span class="queso-checkbox__label__text">Delete</span>
            </span>
            <input
                class="queso-checkbox__native"
                type="checkbox"
                id="permissions-delete"
                name="permissions[]"
                value="delete"
                data-testid="permission-checkbox"
                aria-describedby="permissions-help"
            />
        </label>
        <label class="queso-checkbox" for="permissions-admin">
            <span class="queso-checkbox__box">
                <span class="queso-checkbox__box__symbol">✔︎</span>
            </span>
            <span class="queso-checkbox__label">
                <span class="queso-checkbox__label__text">Admin</span>
            </span>
            <input
                class="queso-checkbox__native"
                type="checkbox"
                id="permissions-admin"
                name="permissions[]"
                value="admin"
                data-testid="permission-checkbox"
                aria-describedby="permissions-help"
            />
        </label>
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
    <queso-checkbox-multiple
        name="roles"
        label="User Roles"
        :choices="roleChoices"
        is-read-only
        v-model="userRoles"
    />
</template>

<script setup>
import { ref } from "vue";
import { QuesoCheckboxMultiple } from "@allomambo/queso";

const userRoles = ref(["admin", "moderator"]);
const roleChoices = [
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
        <div class="queso-checkbox">
            <span class="queso-checkbox__box">
                <span class="queso-checkbox__box__symbol">✔︎</span>
            </span>
            <span class="queso-checkbox__label">
                <span class="queso-checkbox__label__text">User</span>
            </span>
        </div>
        <div class="queso-checkbox is-checked">
            <span class="queso-checkbox__box">
                <span class="queso-checkbox__box__symbol">✔︎</span>
            </span>
            <span class="queso-checkbox__label">
                <span class="queso-checkbox__label__text">Moderator</span>
            </span>
        </div>
        <div class="queso-checkbox is-checked">
            <span class="queso-checkbox__box">
                <span class="queso-checkbox__box__symbol">✔︎</span>
            </span>
            <span class="queso-checkbox__label">
                <span class="queso-checkbox__label__text">Admin</span>
            </span>
        </div>
        <div class="queso-checkbox">
            <span class="queso-checkbox__box">
                <span class="queso-checkbox__box__symbol">✔︎</span>
            </span>
            <span class="queso-checkbox__label">
                <span class="queso-checkbox__label__text">Super Admin</span>
            </span>
        </div>
    </div>
</div>
```

:::

## Behavior

-   **Two-way Data Binding**: Uses Vue 3's `defineModel` for seamless `v-model` integration
-   **Form Integration**: Designed to work seamlessly with HTML forms
-   **Multiple Selection**: Multiple choices can be selected simultaneously
-   **Read-only Mode**: When `is-read-only` is true, displays the choices as non-interactive elements
-   **Customizable Appearance**: Slots for customizing checkbox box and label appearance
-   **Validation**: Built-in validation for required fields with custom validation messages

## Accessibility

-   **Label Association**: Uses proper `label` element with `for` attribute
-   **Required Indicator**: Displays visual indicator for required fields
-   **Error States**: Provides clear error messaging and styling
-   **Keyboard Navigation**: Full keyboard accessibility support
-   **Screen Reader Support**: Proper ARIA attributes and semantic structure
-   **State Management**: Tracks hover and focus states for accessibility
-   **Checkbox Group**: Proper checkbox group semantics with array-based selection

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

### Checkbox Items

::: info 🎨
The styles for each individual checkbox come from the `QuesoCheckbox` component. See the [CSS Classes section in QuesoCheckbox](/components/checkbox#checkbox) for detailed styling information.
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

export interface QuesoCheckboxMultipleChoice {
    label: string;
    value: string;
    isChecked?: boolean;
}

export type QuesoCheckboxMultipleChoices = QuesoCheckboxMultipleChoice[];
export type QuesoCheckboxMultipleModel = QuesoCheckboxMultipleChoice["value"][];

export interface QuesoCheckboxMultipleProps {
    name: string;
    label?: string;
    id?: string;
    choices: QuesoCheckboxMultipleChoices;
    validationMessage?: string;
    isRequired?: boolean;
    isDisabled?: boolean;
    isReadOnly?: boolean;
    isError?: boolean;
    extraAttributes?: Record<string, string>;
}
```
