# 🧀 Queso

##### Required

-   Node 16.14.2
-   VueJS 3.2.37

### Installation

**1.** Install the package

```
# With Yarn:
yarn add @allomambo/queso

# With npm:
npm install @allomambo/queso
```

**2.** Add the css styles

```
import "@allomambo/queso/css";
```

\*If the components are used in more than one place, it's good to add it globally in your project.

### Use components in your project

Import the desired component from the package like a normal component.

```
<template>
    ...
    <queso-component />
    ...
</template>

<script setup>
import { QuesoComponent } from "@allomambo/queso";
</script>
```
