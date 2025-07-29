# QuesoDropdown

A flexible dropdown component with comprehensive accessibility support, keyboard navigation, and focus management. It supports both single and multiple selection modes with customizable options and automatic ARIA attributes.

## Basic Usage

```vue
<template>
    <queso-dropdown v-model="selectedOptions" :options="options">
        <template #selectorPlaceholder> Choose an option </template>
    </queso-dropdown>
</template>

<script setup>
import { ref } from "vue";
import { QuesoDropdown } from "@allomambo/queso";

const selectedOptions = ref([]);
const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
];
</script>
```

## Props

### `options`

-   **Type:** `QuesoDropdownOption[]`
-   **Required:** `true`
-   **Description:** Array of options to display in the dropdown. Each option must have a `value` and `label`, with optional `data`.

### `multiple`

-   **Type:** `boolean`
-   **Default:** `false`
-   **Description:** When `true`, allows multiple options to be selected simultaneously.

### `stayOpenOnSelection`

-   **Type:** `boolean`
-   **Default:** `false`
-   **Description:** When `true`, the dropdown stays open after selecting an option (only applies when `multiple` is `false`).

## Emits

### `dropdown:open`

-   **Payload:** `void`
-   **Description:** Emitted when the dropdown is opened.

### `dropdown:close`

-   **Payload:** `void`
-   **Description:** Emitted when the dropdown is closed.

## Slots

### `selector`

-   **Props:** `{ options: QuesoDropdownOption[], activeOptions: QuesoDropdownOption[], isDropdownOpen: boolean }`
-   **Description:** Completely replaces the entire selector content.

### `selectorBeforeText`

-   **Props:** `{ isDropdownOpen: boolean, options: QuesoDropdownOptions, activeOptions: QuesoDropdownOptions }`
-   **Description:** Content to display before the selector text.

### `selectorPlaceholder`

-   **Props:** `{ isDropdownOpen: boolean }`
-   **Description:** Text displayed when no options are selected.

### `selectorActiveOptions`

-   **Props:** `{ isDropdownOpen: boolean, activeOptions: QuesoDropdownOptions }`
-   **Description:** Content to display when options are selected.

### `selectorAfterText`

-   **Props:** `{ isDropdownOpen: boolean, options: QuesoDropdownOptions, activeOptions: QuesoDropdownOptions }`
-   **Description:** Content to display after the selector text.

### `selectorIcon`

-   **Props:** `{ isDropdownOpen: boolean }`
-   **Description:** The icon displayed in the selector. Defaults to "↓".

### `popoverHeader`

-   **Props:** `{ options: QuesoDropdownOptions, activeOptions: QuesoDropdownOptions }`
-   **Description:** Content to display at the top of the dropdown popover.

### `popoverItem`

-   **Props:** `{ index: number, value: string, label: string, data?: object, openDropdown: () => void, closeDropdown: () => void }`
-   **Description:** Content for each dropdown option.

### `popoverFooter`

-   **Props:** `{ options: QuesoDropdownOptions, activeOptions: QuesoDropdownOptions }`
-   **Description:** Content to display at the bottom of the dropdown popover.

### `afterDropdown`

-   **Description:** Content to display after the dropdown component.

## Examples

### Basic Single Selection

::: code-group

```vue [Vue Template]
<template>
    <queso-dropdown :options="options" v-model="selectedOption">
        <template #selectorPlaceholder> Choose a fruit </template>
    </queso-dropdown>
</template>

<script setup>
import { ref } from "vue";

const selectedOption = ref([]);
const options = [
    { value: "apple", label: "Apple" },
    { value: "banana", label: "Banana" },
    { value: "orange", label: "Orange" },
];
</script>
```

```html [Rendered HTML]
<div class="queso-dropdown is-dropdown-close">
    <div
        class="queso-dropdown__selector"
        aria-expanded="false"
        aria-controls="queso-dropdown__abc123"
        tabindex="0"
    >
        <div class="queso-dropdown__selector__text">
            <div class="queso-dropdown__selector__text__placeholder">
                Choose a fruit
            </div>
        </div>
        <div class="queso-dropdown__selector__icon">↓</div>
    </div>
    <div class="queso-dropdown__popover" id="queso-dropdown__abc123">
        <div class="queso-dropdown__popover__scroll">
            <ul class="queso-dropdown__popover__options-list">
                <li
                    class="queso-dropdown__popover__options-list__item"
                    tabindex="-1"
                >
                    Apple
                </li>
                <li
                    class="queso-dropdown__popover__options-list__item"
                    tabindex="-1"
                >
                    Banana
                </li>
                <li
                    class="queso-dropdown__popover__options-list__item"
                    tabindex="-1"
                >
                    Orange
                </li>
            </ul>
        </div>
    </div>
</div>
```

:::

### Multiple Selection

```vue
<template>
    <queso-dropdown :options="options" multiple v-model="selectedOptions">
        <template #selectorPlaceholder> Choose multiple fruits </template>
        <template #selectorActiveOptions="{ activeOptions }">
            {{ activeOptions.map((option) => option.label).join(", ") }}
        </template>
    </queso-dropdown>
</template>

<script setup>
import { ref } from "vue";

const selectedOptions = ref([]);
const options = [
    { value: "apple", label: "Apple" },
    { value: "banana", label: "Banana" },
    { value: "orange", label: "Orange" },
];
</script>
```

### Custom Item Template and Selector

::: code-group

```vue [Vue Template]
<template>
    <queso-dropdown :options="options" v-model="selectedOption">
        <template #selector="{ activeOptions }">
            <div class="custom-selector">
                <span class="icon">🌍</span>
                <span class="text">
                    {{
                        activeOptions.length > 0
                            ? activeOptions[0].label
                            : "Select country"
                    }}
                </span>
                <span class="arrow">▼</span>
            </div>
        </template>
        <template #popoverItem="{ label, data }">
            <div class="country-option">
                <span class="flag">{{ data?.flag }}</span>
                <span class="name">{{ label }}</span>
                <span class="code">{{ data?.code }}</span>
            </div>
        </template>
    </queso-dropdown>
</template>

<script setup>
import { ref } from "vue";

const selectedOption = ref([]);
const options = [
    { value: "us", label: "United States", data: { flag: "🇺🇸", code: "US" } },
    { value: "ca", label: "Canada", data: { flag: "🇨🇦", code: "CA" } },
    { value: "mx", label: "Mexico", data: { flag: "🇲🇽", code: "MX" } },
];
</script>
```

```html [Rendered HTML]
<div class="queso-dropdown is-dropdown-close">
    <div
        class="queso-dropdown__selector"
        aria-expanded="false"
        aria-controls="queso-dropdown__abc123"
        tabindex="0"
    >
        <div class="custom-selector">
            <span class="icon">🌍</span>
            <span class="text">Select country</span>
            <span class="arrow">▼</span>
        </div>
    </div>
    <div class="queso-dropdown__popover" id="queso-dropdown__abc123">
        <div class="queso-dropdown__popover__scroll">
            <ul class="queso-dropdown__popover__options-list">
                <li
                    class="queso-dropdown__popover__options-list__item"
                    tabindex="-1"
                >
                    <div class="country-option">
                        <span class="flag">🇺🇸</span>
                        <span class="name">United States</span>
                        <span class="code">US</span>
                    </div>
                </li>
                <li
                    class="queso-dropdown__popover__options-list__item"
                    tabindex="-1"
                >
                    <div class="country-option">
                        <span class="flag">🇨🇦</span>
                        <span class="name">Canada</span>
                        <span class="code">CA</span>
                    </div>
                </li>
                <li
                    class="queso-dropdown__popover__options-list__item"
                    tabindex="-1"
                >
                    <div class="country-option">
                        <span class="flag">🇲🇽</span>
                        <span class="name">Mexico</span>
                        <span class="code">MX</span>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</div>
```

:::

### With Events

```vue
<template>
    <queso-dropdown
        :options="options"
        @dropdown:open="handleOpen"
        @dropdown:close="handleClose"
        v-model="selectedOption"
    >
        <template #selectorPlaceholder> Choose a fruit </template>
    </queso-dropdown>
</template>

<script setup>
import { ref } from "vue";

const selectedOption = ref([]);
const options = [
    { value: "apple", label: "Apple" },
    { value: "banana", label: "Banana" },
    { value: "orange", label: "Orange" },
];

const handleOpen = () => {
    console.log("Dropdown opened");
};

const handleClose = () => {
    console.log("Dropdown closed");
};
</script>
```

## Exposed Methods

### `openDropdown()`

Opens the dropdown and focuses the first option.

### `closeDropdown()`

Closes the dropdown and resets focus.

### `isDropdownOpen`

Reactive boolean indicating the current open state.

## Behavior

-   **Keyboard Navigation:** Full keyboard support with arrow keys, Enter, Space, and Escape
-   **Focus Management:** Automatic focus trapping and management
-   **Click Outside:** Automatically closes when clicking outside
-   **Accessibility:** Complete ARIA attributes and screen reader support
-   **Scroll Management:** Automatic scroll to top when closing
-   **Multiple Selection:** Toggle selection in multiple mode, replace in single mode

## Accessibility

The component automatically handles:

-   `aria-expanded` attribute for screen readers
-   `aria-controls` attribute linking to the popover
-   `tabindex` management for keyboard navigation
-   Focus trapping within the dropdown
-   Proper semantic structure with lists and list items
-   Keyboard shortcuts (Arrow keys, Enter, Space, Escape)

## CSS

### Classes

The component applies the following CSS classes:

-   `.queso-dropdown` - Base class
-   `.is-dropdown-open` - Applied when dropdown is open
-   `.is-dropdown-close` - Applied when dropdown is closed
-   `.is-multiple` - Applied when multiple selection is enabled
-   `.queso-dropdown__selector` - Selector container
-   `.queso-dropdown__popover` - Popover container
-   `.queso-dropdown__popover__options-list__item` - Individual option item
-   `.is-option-active` - Applied to selected options

### Custom Properties

-   `--queso-dropdown-selector-align` - Selector alignment (default: center)
-   `--queso-dropdown-selector-justify` - Selector justification (default: flex-start)
-   `--queso-dropdown-popover-pos-top` - Popover top position (default: 100%)
-   `--queso-dropdown-popover-pos-bottom` - Popover bottom position (default: auto)
-   `--queso-dropdown-popover-pos-left` - Popover left position (default: 0)
-   `--queso-dropdown-popover-pos-right` - Popover right position (default: 0)
-   `--queso-dropdown-popover-z` - Popover z-index (default: 300)
-   `--queso-dropdown-popover-opacity` - Popover opacity (default: 0)
-   `--queso-dropdown-popover-display` - Popover display (default: flex)
-   `--queso-dropdown-popover-direction` - Popover direction (default: column)
-   `--queso-dropdown-popover-align` - Popover alignment (default: stretch)
-   `--queso-dropdown-popover-justify` - Popover justification (default: flex-start)
-   `--queso-dropdown-popover-wrap` - Popover wrap (default: nowrap)
-   `--queso-dropdown-popover-max-height` - Popover max height (default: 20rem)

## Type Declaration

```ts
export type QuesoDropdownOptionValue = string;
export type QuesoDropdownOptionValues = QuesoDropdownOptionValue[];

export interface QuesoDropdownOption {
    value: QuesoDropdownOptionValue;
    label: string;
    data?: object;
}
export type QuesoDropdownOptions = QuesoDropdownOption[];

export type QuesoDropdownModel = QuesoDropdownOptionValues;

export interface QuesoDropdownProps {
    options: QuesoDropdownOptions;
    multiple?: boolean;
    stayOpenOnSelection?: boolean;
}
```
