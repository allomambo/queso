# QuesoTextArea

A textarea input field component that supports multi-line text input, two-way data binding with `v-model`, and provides a consistent interface for form inputs. All form field components share the same base structure for consistent styling and behavior across your application.

## Basic Usage

```vue
<template>
    <queso-text-area
        name="description"
        label="Description"
        placeholder="Enter your description..."
        v-model="description"
    />
</template>

<script setup>
import { ref } from "vue";
import { QuesoTextArea } from "@allomambo/queso";

const description = ref("");
</script>
```

## Props

### `name`

-   **Type:** `string`
-   **Required:** `true`
-   **Description:** The name attribute for the textarea field.

### `label`

-   **Type:** `string`
-   **Required:** `false`
-   **Description:** The label text displayed above the textarea.

### `id`

-   **Type:** `string`
-   **Required:** `false`
-   **Description:** The ID attribute for the textarea field (defaults to `name` if not provided).

### `placeholder`

-   **Type:** `string`
-   **Required:** `false`
-   **Description:** Placeholder text for the textarea field.

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
-   **Description:** Additional HTML attributes to apply to the textarea element.

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
-   **Description:** Content displayed before the textarea field.

### `beforeTextAreaInput`

-   **Props:** `{}`
-   **Description:** Content displayed before the textarea element (inside the textarea wrapper).

### `afterTextAreaInput`

-   **Props:** `{}`
-   **Description:** Content displayed after the textarea element (inside the textarea wrapper).

### `afterInput`

-   **Props:** `ExposedData`
-   **Description:** Content displayed after the textarea field.

### `error`

-   **Props:** `ExposedData`
-   **Description:** Content displayed when the field has an error state.

## Examples

### Basic TypeScript Support

::: code-group

```vue [Vue Template]
<template>
    <queso-text-area
        name="bio"
        label="Biography"
        placeholder="Tell us about yourself..."
        v-model="bio"
    />
</template>

<script setup lang="ts">
import { ref } from "vue";
import { QuesoTextArea } from "@allomambo/queso";
import type { QuesoTextAreaModel } from "@allomambo/queso";

const bio = ref<QuesoTextAreaModel>("");
</script>
```

```html [Rendered HTML]
<div class="queso-field">
    <label for="bio" class="queso-field__label">
        <span class="queso-field__label__text">Biography</span>
    </label>
    <div class="queso-field__input">
        <div class="queso-text-area">
            <textarea
                class="queso-text-area__input"
                id="bio"
                name="bio"
                placeholder="Tell us about yourself..."
            ></textarea>
        </div>
    </div>
</div>
```

:::

### With Character Counter

::: code-group

```vue [Vue Template]
<template>
    <queso-text-area
        name="comment"
        label="Comment"
        placeholder="Write your comment..."
        is-required
        v-model="comment"
    >
        <template #afterTextAreaInput>
            <div class="char-counter">{{ comment.length }}/500 characters</div>
        </template>
    </queso-text-area>
</template>

<script setup>
import { ref } from "vue";
import { QuesoTextArea } from "@allomambo/queso";

const comment = ref("");
</script>
```

```html [Rendered HTML]
<div class="queso-field">
    <label for="comment" class="queso-field__label">
        <span class="queso-field__label__text">Comment</span>
        <span class="queso-field__label__required">*</span>
    </label>
    <div class="queso-field__input">
        <div class="queso-text-area">
            <textarea
                class="queso-text-area__input"
                id="comment"
                name="comment"
                placeholder="Write your comment..."
                required
            ></textarea>
            <div class="char-counter">0/500 characters</div>
        </div>
    </div>
</div>
```

:::

### With Extra Attributes

::: code-group

```vue [Vue Template]
<template>
    <queso-text-area
        name="feedback"
        label="Feedback"
        placeholder="Share your feedback..."
        v-model="feedback"
        :extra-attributes="{
            'data-testid': 'feedback-textarea',
            'aria-describedby': 'feedback-help',
            rows: '4',
            maxlength: '1000',
        }"
    />
    <div id="feedback-help" class="help-text">
        Please provide detailed feedback about your experience
    </div>
</template>

<script setup>
import { ref } from "vue";
import { QuesoTextArea } from "@allomambo/queso";

const feedback = ref("");
</script>
```

```html [Rendered HTML]
<div class="queso-field">
    <label for="feedback" class="queso-field__label">
        <span class="queso-field__label__text">Feedback</span>
    </label>
    <div class="queso-field__input">
        <div class="queso-text-area">
            <textarea
                class="queso-text-area__input"
                id="feedback"
                name="feedback"
                placeholder="Share your feedback..."
                data-testid="feedback-textarea"
                aria-describedby="feedback-help"
                rows="4"
                maxlength="1000"
            ></textarea>
        </div>
    </div>
</div>
<div id="feedback-help" class="help-text">
    Please provide detailed feedback about your experience
</div>
```

:::

### Read-only Field

::: code-group

```vue [Vue Template]
<template>
    <queso-text-area
        name="terms"
        label="Terms and Conditions"
        is-read-only
        v-model="terms"
    />
</template>

<script setup>
import { ref } from "vue";
import { QuesoTextArea } from "@allomambo/queso";

const terms = ref(
    "By using this service, you agree to our terms and conditions...",
);
</script>
```

```html [Rendered HTML]
<div class="queso-field is-read-only">
    <label for="terms" class="queso-field__label">
        <span class="queso-field__label__text">Terms and Conditions</span>
    </label>
    <div class="queso-field__input">
        <div class="queso-text-area">
            <span class="queso-text-area__readonly"
                >By using this service, you agree to our terms and
                conditions...</span
            >
        </div>
    </div>
</div>
```

:::

## Behavior

-   **Two-way Data Binding**: Uses Vue 3's `defineModel` for seamless `v-model` integration
-   **Form Integration**: Designed to work seamlessly with HTML forms
-   **Multi-line Support**: Native textarea element for multi-line text input
-   **Read-only Mode**: When `is-read-only` is true, displays the value as text instead of a textarea
-   **Resizable**: Native textarea resizing behavior

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
-   `.queso-text-area` - Textarea wrapper
-   `.queso-text-area__input` - Textarea element
-   `.queso-text-area__readonly` - Read-only text display

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

export type QuesoTextAreaModel = string;

export interface QuesoTextAreaProps {
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
