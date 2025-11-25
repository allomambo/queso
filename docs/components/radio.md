# QuesoRadio

A radio button group component that supports single selection from multiple choices, two-way data binding with `v-model`, and provides a consistent interface for form inputs. All form field components share the same base structure for consistent styling and behavior across your application.

## Basic Usage

```vue
<template>
    <queso-radio
        name="gender"
        label="Gender"
        :choices="genderChoices"
        v-model="selectedGender"
    />
</template>

<script setup>
import { ref } from "vue";
import { QuesoRadio } from "@allomambo/queso";

const selectedGender = ref("");
const genderChoices = [
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
    { label: "Other", value: "other" },
];
</script>
```

## Props

### `name`

-   **Type:** `string`
-   **Required:** `true`
-   **Description:** The name attribute for the radio group field.

### `label`

-   **Type:** `string`
-   **Required:** `false`
-   **Description:** The label text displayed above the radio group.

### `id`

-   **Type:** `string`
-   **Required:** `false`
-   **Description:** The ID attribute for the radio group field (defaults to `name` if not provided).

### `choices`

-   **Type:** `QuesoRadioChoice<TChoiceData>[]`
-   **Required:** `true`
-   **Description:** Array of choices for the radio group. Each choice must have a `label` and `value`, with optional `data`. `TChoiceData` defaults to `Record<string, any>` and lets you type the extra payload shared through slots.

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
-   **Description:** Additional HTML attributes to apply to each radio input element.

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
-   **Description:** Content displayed before the radio group field.

### `radio`

-   **Props:** `ExposedData & QuesoRadioChoice<TChoiceData> & { isHovered: boolean, isSelected: boolean }`
-   **Description:** Custom radio container element for each choice. Defaults to a styled radio container.

### `radioBox`

-   **Props:** `ExposedData & QuesoRadioChoice<TChoiceData> & { isHovered: boolean, isSelected: boolean }`
-   **Description:** Custom radio box element for each choice. Defaults to a styled radio box.

### `radioBoxSymbol`

-   **Props:** `ExposedData & QuesoRadioChoice<TChoiceData> & { isHovered: boolean, isSelected: boolean }`
-   **Description:** Symbol displayed inside the radio box when selected. Defaults to "✔︎".

### `radioLabel`

-   **Props:** `ExposedData & QuesoRadioChoice<TChoiceData> & { isHovered: boolean, isSelected: boolean }`
-   **Description:** Custom label element for each choice. Defaults to the choice label.

### `afterInput`

-   **Props:** `ExposedData`
-   **Description:** Content displayed after the radio group field.

### `error`

-   **Props:** `ExposedData`
-   **Description:** Content displayed when the field has an error state.

## Examples

### Basic TypeScript Support

::: code-group

```vue [Vue Template]
<template>
    <queso-radio
        name="preference"
        label="Preferred Contact Method"
        :choices="contactChoices"
        v-model="selectedContact"
    />
</template>

<script setup lang="ts">
import { ref } from "vue";
import { QuesoRadio } from "@allomambo/queso";
import type { QuesoRadioModel, QuesoRadioChoices } from "@allomambo/queso";

const selectedContact = ref<QuesoRadioModel>("");
const contactChoices: QuesoRadioChoices = [
    { label: "Email", value: "email" },
    { label: "Phone", value: "phone" },
    { label: "SMS", value: "sms" },
];
</script>
```

```html [Rendered HTML]
<div class="queso-field">
    <div class="queso-field__label">
        <span class="queso-field__label__text">Preferred Contact Method</span>
    </div>
    <div class="queso-field__input">
        <label class="queso-radio" for="preference-email">
            <span class="queso-radio__box">
                <span class="queso-radio__box__symbol">✔︎</span>
            </span>
            <span class="queso-radio__label">
                <span class="queso-radio__label__text">Email</span>
            </span>
            <input
                class="queso-radio__native"
                type="radio"
                id="preference-email"
                name="preference"
                value="email"
            />
        </label>
        <label class="queso-radio" for="preference-phone">
            <span class="queso-radio__box">
                <span class="queso-radio__box__symbol">✔︎</span>
            </span>
            <span class="queso-radio__label">
                <span class="queso-radio__label__text">Phone</span>
            </span>
            <input
                class="queso-radio__native"
                type="radio"
                id="preference-phone"
                name="preference"
                value="phone"
            />
        </label>
        <label class="queso-radio" for="preference-sms">
            <span class="queso-radio__box">
                <span class="queso-radio__box__symbol">✔︎</span>
            </span>
            <span class="queso-radio__label">
                <span class="queso-radio__label__text">SMS</span>
            </span>
            <input
                class="queso-radio__native"
                type="radio"
                id="preference-sms"
                name="preference"
                value="sms"
            />
        </label>
    </div>
</div>
```

:::

### Custom Radio Box

::: code-group

```vue [Vue Template]
<template>
    <queso-radio
        name="theme"
        label="Theme Preference"
        :choices="themeChoices"
        v-model="selectedTheme"
    >
        <template #radioBox>
            <div class="custom-radio-box">
                <div class="custom-radio-circle"></div>
            </div>
        </template>
        <template #radioBoxSymbol>
            <div class="custom-radio-dot"></div>
        </template>
    </queso-radio>
</template>

<script setup>
import { ref } from "vue";
import { QuesoRadio } from "@allomambo/queso";

const selectedTheme = ref("");
const themeChoices = [
    { label: "Light", value: "light" },
    { label: "Dark", value: "dark" },
    { label: "Auto", value: "auto" },
];
</script>
```

```html [Rendered HTML]
<div class="queso-field">
    <div class="queso-field__label">
        <span class="queso-field__label__text">Theme Preference</span>
    </div>
    <div class="queso-field__input">
        <label class="queso-radio" for="theme-light">
            <div class="custom-radio-box">
                <div class="custom-radio-circle"></div>
            </div>
            <span class="queso-radio__label">
                <span class="queso-radio__label__text">Light</span>
            </span>
            <input
                class="queso-radio__native"
                type="radio"
                id="theme-light"
                name="theme"
                value="light"
            />
        </label>
        <label class="queso-radio" for="theme-dark">
            <div class="custom-radio-box">
                <div class="custom-radio-circle"></div>
            </div>
            <span class="queso-radio__label">
                <span class="queso-radio__label__text">Dark</span>
            </span>
            <input
                class="queso-radio__native"
                type="radio"
                id="theme-dark"
                name="theme"
                value="dark"
            />
        </label>
        <label class="queso-radio" for="theme-auto">
            <div class="custom-radio-box">
                <div class="custom-radio-circle"></div>
            </div>
            <span class="queso-radio__label">
                <span class="queso-radio__label__text">Auto</span>
            </span>
            <input
                class="queso-radio__native"
                type="radio"
                id="theme-auto"
                name="theme"
                value="auto"
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
    <queso-radio
        name="notification"
        label="Notification Settings"
        :choices="notificationChoices"
        v-model="selectedNotification"
        :extra-attributes="{
            'data-testid': 'notification-radio',
            'aria-describedby': 'notification-help',
        }"
    />
    <div id="notification-help" class="help-text">
        Choose how you want to receive notifications
    </div>
</template>

<script setup>
import { ref } from "vue";
import { QuesoRadio } from "@allomambo/queso";

const selectedNotification = ref("");
const notificationChoices = [
    { label: "All notifications", value: "all" },
    { label: "Important only", value: "important" },
    { label: "None", value: "none" },
];
</script>
```

```html [Rendered HTML]
<div class="queso-field">
    <div class="queso-field__label">
        <span class="queso-field__label__text">Notification Settings</span>
    </div>
    <div class="queso-field__input">
        <label class="queso-radio" for="notification-all">
            <span class="queso-radio__box">
                <span class="queso-radio__box__symbol">✔︎</span>
            </span>
            <span class="queso-radio__label">
                <span class="queso-radio__label__text">All notifications</span>
            </span>
            <input
                class="queso-radio__native"
                type="radio"
                id="notification-all"
                name="notification"
                value="all"
                data-testid="notification-radio"
                aria-describedby="notification-help"
            />
        </label>
        <label class="queso-radio" for="notification-important">
            <span class="queso-radio__box">
                <span class="queso-radio__box__symbol">✔︎</span>
            </span>
            <span class="queso-radio__label">
                <span class="queso-radio__label__text">Important only</span>
            </span>
            <input
                class="queso-radio__native"
                type="radio"
                id="notification-important"
                name="notification"
                value="important"
                data-testid="notification-radio"
                aria-describedby="notification-help"
            />
        </label>
        <label class="queso-radio" for="notification-none">
            <span class="queso-radio__box">
                <span class="queso-radio__box__symbol">✔︎</span>
            </span>
            <span class="queso-radio__label">
                <span class="queso-radio__label__text">None</span>
            </span>
            <input
                class="queso-radio__native"
                type="radio"
                id="notification-none"
                name="notification"
                value="none"
                data-testid="notification-radio"
                aria-describedby="notification-help"
            />
        </label>
    </div>
</div>
<div id="notification-help" class="help-text">
    Choose how you want to receive notifications
</div>
```

:::

### Read-only Field

::: code-group

```vue [Vue Template]
<template>
    <queso-radio
        name="status"
        label="Account Status"
        :choices="statusChoices"
        is-read-only
        v-model="accountStatus"
    />
</template>

<script setup>
import { ref } from "vue";
import { QuesoRadio } from "@allomambo/queso";

const accountStatus = ref("active");
const statusChoices = [
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
        <div class="queso-radio is-selected">
            <span class="queso-radio__box">
                <span class="queso-radio__box__symbol">✔︎</span>
            </span>
            <span class="queso-radio__label">
                <span class="queso-radio__label__text">Active</span>
            </span>
        </div>
        <div class="queso-radio">
            <span class="queso-radio__box">
                <span class="queso-radio__box__symbol">✔︎</span>
            </span>
            <span class="queso-radio__label">
                <span class="queso-radio__label__text">Inactive</span>
            </span>
        </div>
        <div class="queso-radio">
            <span class="queso-radio__box">
                <span class="queso-radio__box__symbol">✔︎</span>
            </span>
            <span class="queso-radio__label">
                <span class="queso-radio__label__text">Suspended</span>
            </span>
        </div>
    </div>
</div>
```

:::

## Behavior

-   **Two-way Data Binding**: Uses Vue 3's `defineModel` for seamless `v-model` integration
-   **Form Integration**: Designed to work seamlessly with HTML forms
-   **Single Selection**: Only one choice can be selected at a time
-   **Read-only Mode**: When `is-read-only` is true, displays the choices as non-interactive elements
-   **Customizable Appearance**: Slots for customizing radio box and label appearance

## Accessibility

-   **Label Association**: Uses proper `label` element with `for` attribute
-   **Required Indicator**: Displays visual indicator for required fields
-   **Error States**: Provides clear error messaging and styling
-   **Keyboard Navigation**: Full keyboard accessibility support
-   **Screen Reader Support**: Proper ARIA attributes and semantic structure
-   **State Management**: Tracks hover and focus states for accessibility
-   **Radio Group**: Proper radio group semantics with shared `name` attribute

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

### Radio Items

-   `.queso-radio` - Individual radio item container
-   `.queso-radio.is-selected` - Selected state
-   `.queso-radio__box` - Radio box container
-   `.queso-radio__box__symbol` - Radio box symbol (checkmark)
-   `.queso-radio__label` - Radio label container
-   `.queso-radio__label__text` - Radio label text

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

export interface QuesoRadioChoice<TChoiceData = Record<string, any>> {
    label: string;
    value: string;
    data?: TChoiceData;
}

export type QuesoRadioChoices<TChoiceData = Record<string, any>> =
    QuesoRadioChoice<TChoiceData>[];
export type QuesoRadioModel = QuesoRadioChoice["value"];

export interface QuesoRadioProps<TChoiceData = Record<string, any>> {
    name: string;
    label?: string;
    id?: string;
    choices: QuesoRadioChoices<TChoiceData>;
    isRequired?: boolean;
    isDisabled?: boolean;
    isReadOnly?: boolean;
    isError?: boolean;
    extraAttributes?: Record<string, string>;
}
```
