---
prev:
    text: "Sass core"
    link: "/sass-core/"
next: false
---

# Utils

These utility functions are general-purpose helpers written in TypeScript. They are not Vue-specific and can be used in any JavaScript or TypeScript project, regardless of framework.

The utilities cover common string manipulations, event helpers, and more, making them useful for a wide range of applications beyond just Vue components.

## `capitalize`

Capitalizes the first letter of a string.

```ts
import { capitalize } from "@allomambo/queso/utils";

const textToCapitalize = capitalize("hello world");
// Hello world
```

##### Type Declaration

```ts
declare function capitalize(str: string): string;
```

## `getFirstObjectOfArray`

Retrieves the first object from an array, or returns the data itself if it's not an array.

```ts
import { getFirstObjectOfArray } from "@allomambo/queso/utils";

const array = [{ id: 1 }, { id: 2 }];
const firstItem = getFirstObjectOfArray(array);
// { id: 1 }

const singleObject = { id: 1 };
const result = getFirstObjectOfArray(singleObject);
// { id: 1 }

const emptyArray = [];
const nullResult = getFirstObjectOfArray(emptyArray);
// null
```

##### Type Declaration

```ts
declare function getFirstObjectOfArray<T>(data: T[] | T | undefined): T | null;
```

### `firstObjectOfArray` <Badge type="danger" text="deprecated" />

::: warning
Deprecated, use [`getFirstObjectOfArray`](./utils#getfirstobjectofarray) instead.
:::

## `resizeEnd`

Creates a custom `resizeEnd` event that fires when the window resize ends (debounced by 200ms).

```ts
import { resizeEnd } from "@allomambo/queso/utils";

// Initialize the resize end event
resizeEnd();

// Listen for the resize end event
window.addEventListener("resizeEnd", () => {
    console.log("Window resize ended");
});
```

##### Type Declaration

```ts
declare function resizeEnd(): void;
```

## `toCamelCase`

Converts a string to camelCase format.

```ts
import { toCamelCase } from "@allomambo/queso/utils";

const result1 = toCamelCase("hello world");
// "helloWorld"

const result2 = toCamelCase("hello-world");
// "helloWorld"

const result3 = toCamelCase("hello_world");
// "helloWorld"

const result4 = toCamelCase("");
// ""
```

##### Type Declaration

```ts
declare function toCamelCase(str: string): string;
```

## `toKebabCase`

Converts a string to kebab-case format.

```ts
import { toKebabCase } from "@allomambo/queso/utils";

const result1 = toKebabCase("hello world");
// "hello-world"

const result2 = toKebabCase("helloWorld");
// "hello-world"

const result3 = toKebabCase("Hello World");
// "hello-world"

const result4 = toKebabCase("");
// ""
```

##### Type Declaration

```ts
declare function toKebabCase(str: string): string;
```

## `toPascalCase`

Converts a string to PascalCase format.

```ts
import { toPascalCase } from "@allomambo/queso/utils";

const result1 = toPascalCase("hello world");
// "HelloWorld"

const result2 = toPascalCase("hello-world");
// "HelloWorld"

const result3 = toPascalCase("hello_world");
// "HelloWorld"

const result4 = toPascalCase("");
// ""
```

##### Type Declaration

```ts
declare function toPascalCase(str: string): string;
```

## `toSnakeCase`

Converts a string to snake_case format.

```ts
import { toSnakeCase } from "@allomambo/queso/utils";

const result1 = toSnakeCase("hello world");
// "hello_world"

const result2 = toSnakeCase("helloWorld");
// "hello_world"

const result3 = toSnakeCase("Hello World");
// "hello_world"

const result4 = toSnakeCase("");
// ""
```

##### Type Declaration

```ts
declare function toSnakeCase(str: string): string;
```

## `toMailTo`

Converts an email address to a mailto link.

```ts
import { toMailTo } from "@allomambo/queso/utils";

const mailtoLink = toMailTo("user@example.com");
// "mailto:user@example.com"

const mailtoLink2 = toMailTo("USER@EXAMPLE.COM");
// "mailto:user@example.com"

const mailtoLink3 = toMailTo("");
// ""
```

##### Type Declaration

```ts
declare function toMailTo(str: string): string;
```

### `mailTo` <Badge type="danger" text="deprecated" />

::: warning
Deprecated, use [`toMailTo`](./utils#tomailto) instead.
:::

## `toTel`

Converts a phone number to a tel link with proper formatting.

```ts
import { toTel } from "@allomambo/queso/utils";

const telLink = toTel("1234567890");
// "tel:+1234567890"

const telLink2 = toTel("+1 (234) 567-890");
// "tel:+1234567890"

const telLink3 = toTel("123-456-7890");
// "tel:+1234567890"

const telLink4 = toTel("");
// ""
```

##### Type Declaration

```ts
declare function toTel(str: string): string;
```

### `tel` <Badge type="danger" text="deprecated" />

::: warning
Deprecated, use [`toTel`](./utils#totel) instead.
:::
