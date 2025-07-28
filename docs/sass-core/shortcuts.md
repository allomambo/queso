# Shortcuts

Shortcut functions for common CSS operations.

## `dvar()`

Creates a CSS variable with a default fallback.

| Parameter  | Type     | Default&nbsp;Value | Description                              |
| ---------- | -------- | ------------------ | ---------------------------------------- |
| `$var`     | `string` | -                  | The CSS variable name                    |
| `$default` | `any`    | `null`             | The default value if variable is not set |

::: code-group

```scss [Usage]
.element {
    font-size: dvar(--heading-font-size);
}
```

```scss [Result]
.element {
    font-size: var(--heading-font-size, var(--heading-font-size-default));
}
```

:::
