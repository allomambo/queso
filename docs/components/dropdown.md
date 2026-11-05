# QuesoDropdown

A flexible dropdown component following the WAI-ARIA [select-only combobox pattern](https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-select-only/). Focus stays on the selector while the keyboard moves a highlighted option, exposed to assistive technologies with `aria-activedescendant`. It supports both single and multiple selection modes with customizable options.

## Basic Usage

```vue
<template>
    <queso-dropdown
        v-model="selectedOptions"
        :options="options"
        aria-label="Option"
    >
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

-   **Type:** `QuesoDropdownOption<TOptionData>[]`
-   **Required:** `true`
-   **Description:** Array of options to display in the dropdown. Each option must have a `value` and `label`, with optional `data`. `TOptionData` defaults to `Record<string, any>` and lets you strongly type the shape of `data`.

### `multiple`

-   **Type:** `boolean`
-   **Default:** `false`
-   **Description:** When `true`, allows multiple options to be selected simultaneously.

### `stayOpenOnSelection`

-   **Type:** `boolean`
-   **Default:** `false`
-   **Description:** When `true`, the dropdown stays open after selecting an option (only applies when `multiple` is `false`).

### `isDisabled`

-   **Type:** `boolean`
-   **Default:** `false`
-   **Description:** When `true`, disables the dropdown and sets `aria-disabled="true"`. The dropdown cannot be focused, opened by click, or opened with the keyboard. If the dropdown is open when disabled, it will automatically close.

### `isRequired`

-   **Type:** `boolean`
-   **Default:** `false`
-   **Description:** Sets `aria-required="true"` on the combobox.

### `isError`

-   **Type:** `boolean`
-   **Default:** `false`
-   **Description:** Sets `aria-invalid="true"` on the combobox.

### `ariaLabel`

-   **Type:** `string`
-   **Required:** `false`
-   **Description:** Accessible name of the combobox and the listbox.

### `ariaLabelledby`

-   **Type:** `string`
-   **Required:** `false`
-   **Description:** Id of the element naming the combobox and the listbox (e.g. a label). Takes precedence over `ariaLabel`.

::: warning Accessible name
A combobox needs a name. Set `ariaLabel` or `ariaLabelledby` when using `QuesoDropdown` directly. [`QuesoSelect`](/components/select) and [`QuesoSelectMultiple`](/components/select-multiple) wire their label automatically.
:::

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

-   **Props:** `{ index: number, value: string, label: string, data?: TOptionData, isSelected: boolean, isFocused: boolean, openDropdown: () => void, closeDropdown: () => void }`
-   **Description:** Content for each dropdown option. `isFocused` is `true` for the option highlighted by the keyboard. Options are not focusable, so do not put interactive elements (links, buttons) inside them.

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
    <span id="fruit-label">Fruit</span>
    <queso-dropdown
        :options="options"
        aria-labelledby="fruit-label"
        v-model="selectedOption"
    >
        <template #selectorPlaceholder> Choose a fruit </template>
        <template #popoverItem="{ label }">{{ label }}</template>
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
<span id="fruit-label">Fruit</span>
<div class="queso-dropdown is-dropdown-close">
    <div
        class="queso-dropdown__selector"
        role="combobox"
        aria-haspopup="listbox"
        aria-expanded="false"
        aria-controls="queso-dropdown__v-0"
        aria-labelledby="fruit-label"
        tabindex="0"
    >
        <div class="queso-dropdown__selector__text">
            <div class="queso-dropdown__selector__text__placeholder">
                Choose a fruit
            </div>
        </div>
        <div class="queso-dropdown__selector__icon">↓</div>
    </div>
    <div class="queso-dropdown__popover" inert>
        <div class="queso-dropdown__popover__scroll">
            <ul
                class="queso-dropdown__popover__options-list"
                role="listbox"
                id="queso-dropdown__v-0"
                aria-labelledby="fruit-label"
                tabindex="-1"
            >
                <li
                    class="queso-dropdown__popover__options-list__item"
                    role="option"
                    id="queso-dropdown__v-0-option-0"
                    aria-selected="false"
                >
                    Apple
                </li>
                <li
                    class="queso-dropdown__popover__options-list__item"
                    role="option"
                    id="queso-dropdown__v-0-option-1"
                    aria-selected="false"
                >
                    Banana
                </li>
                <li
                    class="queso-dropdown__popover__options-list__item"
                    role="option"
                    id="queso-dropdown__v-0-option-2"
                    aria-selected="false"
                >
                    Orange
                </li>
            </ul>
        </div>
    </div>
</div>
```

While open, the selector gets `aria-expanded="true"` and `aria-activedescendant="queso-dropdown__v-0-option-N"` pointing to the highlighted option, and the popover loses `inert`.

:::

### Multiple Selection

```vue
<template>
    <queso-dropdown
        :options="options"
        multiple
        aria-label="Fruits"
        v-model="selectedOptions"
    >
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
    <queso-dropdown
        :options="options"
        aria-label="Country"
        v-model="selectedOption"
    >
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
        role="combobox"
        aria-haspopup="listbox"
        aria-expanded="false"
        aria-controls="queso-dropdown__v-0"
        aria-label="Country"
        tabindex="0"
    >
        <div class="custom-selector">
            <span class="icon">🌍</span>
            <span class="text">Select country</span>
            <span class="arrow">▼</span>
        </div>
    </div>
    <div class="queso-dropdown__popover" inert>
        <div class="queso-dropdown__popover__scroll">
            <ul
                class="queso-dropdown__popover__options-list"
                role="listbox"
                id="queso-dropdown__v-0"
                aria-label="Country"
                tabindex="-1"
            >
                <li
                    class="queso-dropdown__popover__options-list__item"
                    role="option"
                    id="queso-dropdown__v-0-option-0"
                    aria-selected="false"
                >
                    <div class="country-option">
                        <span class="flag">🇺🇸</span>
                        <span class="name">United States</span>
                        <span class="code">US</span>
                    </div>
                </li>
                <li
                    class="queso-dropdown__popover__options-list__item"
                    role="option"
                    id="queso-dropdown__v-0-option-1"
                    aria-selected="false"
                >
                    <div class="country-option">
                        <span class="flag">🇨🇦</span>
                        <span class="name">Canada</span>
                        <span class="code">CA</span>
                    </div>
                </li>
                <li
                    class="queso-dropdown__popover__options-list__item"
                    role="option"
                    id="queso-dropdown__v-0-option-2"
                    aria-selected="false"
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
        aria-label="Fruit"
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

### Disabled State

```vue
<template>
    <queso-dropdown
        :options="options"
        :isDisabled="isDisabled"
        aria-label="Fruit"
        v-model="selectedOption"
    >
        <template #selectorPlaceholder> Choose a fruit </template>
    </queso-dropdown>
    <button @click="isDisabled = !isDisabled">
        {{ isDisabled ? "Enable" : "Disable" }} Dropdown
    </button>
</template>

<script setup>
import { ref } from "vue";

const selectedOption = ref([]);
const isDisabled = ref(false);
const options = [
    { value: "apple", label: "Apple" },
    { value: "banana", label: "Banana" },
    { value: "orange", label: "Orange" },
];
</script>
```

## Exposed Methods

### `openDropdown()`

Opens the dropdown, highlights the selected option (or the first one) and focuses the selector.

### `closeDropdown()`

Closes the dropdown. Focus stays where it is.

### `focusSelector()`

Moves focus to the selector (the combobox).

### `isDropdownOpen`

Reactive boolean indicating the current open state.

## Behavior

-   **Focus Management:** Focus always stays on the selector. The highlighted option is shown with `.is-option-focused` and announced with `aria-activedescendant`. There is no focus trap. Tab leaves the dropdown: in single mode it selects the highlighted option first, in multiple mode it only closes
-   **Pointer:** Moving the pointer over an option highlights it too, so a single option looks highlighted
-   **Click Outside:** Automatically closes when clicking outside or when focus leaves the dropdown
-   **Scroll Management:** The options list scrolls to keep the highlighted option visible without moving the page, and scrolls back to the top after closing
-   **Multiple Selection:** Toggle selection in multiple mode, replace in single mode
-   **Nested in a Modal:** Escape only closes the open dropdown, not its parent

## Keyboard Interactions

When the dropdown is closed:

| Key                                | Action                                                           |
| ---------------------------------- | ---------------------------------------------------------------- |
| <kbd>↓</kbd>, <kbd>↑</kbd>         | Opens the dropdown and highlights the selected (or first) option |
| <kbd>Enter</kbd>, <kbd>Space</kbd> | Opens the dropdown and highlights the selected (or first) option |
| <kbd>Home</kbd>                    | Opens the dropdown and highlights the first option               |
| <kbd>End</kbd>                     | Opens the dropdown and highlights the last option                |
| Printable characters               | Opens the dropdown and highlights the first matching option      |

When the dropdown is open:

| Key                                | Action                                                                   |
| ---------------------------------- | ------------------------------------------------------------------------ |
| <kbd>↓</kbd>, <kbd>↑</kbd>         | Highlights the next / previous option (stops at the first and last ones) |
| <kbd>Home</kbd>, <kbd>End</kbd>    | Highlights the first / last option                                       |
| <kbd>Enter</kbd>, <kbd>Space</kbd> | Selects the highlighted option (toggles it in multiple mode)             |
| <kbd>Alt</kbd> + <kbd>↑</kbd>      | Closes the dropdown and keeps the current value                          |
| <kbd>Escape</kbd>                  | Closes the dropdown and keeps the current value                          |
| <kbd>Tab</kbd>                     | Selects the highlighted option, closes, and moves focus on. In multiple mode, closes without changing the selection |
| Printable characters               | Highlights the next option starting with the typed characters            |

Typing several characters quickly (within 500 ms) searches for a label starting with them. Repeating the same character cycles through the options starting with it.

## Accessibility

The component automatically handles:

-   `role="combobox"` with `aria-haspopup="listbox"`, `aria-expanded` and `aria-controls` on the selector
-   `role="listbox"` on the options list and `role="option"` with `aria-selected` on each option
-   `aria-multiselectable="true"` on the listbox in multiple mode
-   `aria-activedescendant` pointing to the highlighted option while open
-   `aria-required`, `aria-invalid` and `aria-disabled` from `isRequired`, `isError` and `isDisabled`
-   `inert` on the closed popover, so its content is hidden from assistive technologies and cannot be focused

The accessible name comes from `ariaLabel` or `ariaLabelledby`.

## CSS

### Classes

The component applies the following CSS classes:

-   `.queso-dropdown` - Base class
-   `.is-dropdown-open` - Applied when dropdown is open
-   `.is-dropdown-close` - Applied when dropdown is closed
-   `.is-multiple` - Applied when multiple selection is enabled
-   `.is-disabled` - Applied when dropdown is disabled
-   `.queso-dropdown__selector` - Selector container
-   `.queso-dropdown__popover` - Popover container
-   `.queso-dropdown__popover__options-list__item` - Individual option item
-   `.is-option-active`, `.is-option-selected` - Applied to selected options
-   `.is-option-focused` - Applied to the option highlighted by the keyboard (style it like `:hover`)

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

export interface QuesoDropdownOption<TOptionData = Record<string, any>> {
    value: QuesoDropdownOptionValue;
    label: string;
    data?: TOptionData;
}
export type QuesoDropdownOptions<TOptionData = Record<string, any>> =
    QuesoDropdownOption<TOptionData>[];

export type QuesoDropdownModel = QuesoDropdownOptionValues;

export interface QuesoDropdownProps<TOptionData = Record<string, any>> {
    options: QuesoDropdownOptions<TOptionData>;
    multiple?: boolean;
    stayOpenOnSelection?: boolean;
    isDisabled?: boolean;
    isRequired?: boolean;
    isError?: boolean;
    ariaLabel?: string;
    ariaLabelledby?: string;
}
```
