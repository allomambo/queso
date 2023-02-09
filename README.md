# 🎵 ADISQ - Tempo 🎵

[![npm version](https://img.shields.io/badge/npm-0.1.10-blue)](https://github.com/allomambo/adisq-tempo) ![vue version](https://img.shields.io/badge/vue-3-brightgreen)

Vue3 Components library made for ADISQ.

##### Required

-   Node 16.14.2
-   VueJS 3.2.37

##### Tables of content

-   [Installation](#installation)
-   [Use components in your project](#use-in-project)

### Installation

**1.** At the same level of your `package.json`, create a `.npmrc` file for authentification.

```
touch .npmrc && echo -e "@allomambo:registry=https://npm.pkg.github.com/\r//npm.pkg.github.com/:_authToken=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" > .npmrc
```

<!-- **2.** Create a personal access token on Github ([Official documentation](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token))

\*If you've already done this step in a previous project (Volum, BàO, Guide MQF, etc.), no need to repeat the steps below. Re-use the same token.

1. On Github, click your profile photo in the upper-right corner of any page, then click **Settings**
2. In the left sidebar, click **Developer settings**
3. In the new left sidebar, click **Personal access tokens**
4. Click **Generate new token**
5. Give your token the name: `Github package - ADISQ`
6. Set the expiration date to: `No expiration`
7. In the scopes list, check: `read:packages`
8. Click **Generate token**

_\*This token is used as the password in the next step._

**3.** Log in npm with your Github login infos

```
npm login --scope=@allomambo

> Username: YOUR_GITHUB_USERNAME
> Password: YOUR_GITHUB_PERSONAL_ACCESS_TOKEN
> Email: YOUR_GITHUB_EMAIL
```

_\*Your user must have access to the package repo_
-->

_\*We need to use the `.npmrc` file on staging environments, so make sure it's not ignored in `.gitignore` files._

**2.** Install the package

```
# With Yarn:
yarn add @allomambo/adisq-tempo

# With npm:
npm -i @allomambo/adisq-tempo
```

**3.** Add the css globally in your project :

**3.1.** In your vite config file `vite.config.js`, add or replace the css additionalData with Tempo core sass (reset/mixins/functions) :

```
css: {
    preprocessorOptions: {
        scss: {
            additionalData: `@import "@allomambo/adisq-tempo/sass-core";`,
        },
    },
    ...
},
```

**3.2.** In `App.vue` (or any global vue template file) add base compiled styles :

```
import "@allomambo/adisq-tempo/css";
```

### Use components in your project

Import the desired component from the package like a normal component.

```
<template>
    <div>
        <test-component />
    </div>
</template>

<script>
import { defineComponent } from "vue";

import { TestComponent } from "@allomambo/adisq-tempo";

export default defineComponent({
    components: {
        TestComponent,
    },
});
</script>
```
