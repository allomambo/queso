<template>
    <div class="select-label-multiple">
        <p>{{ options[0].data.label }}</p>
        <p>+{{ optionsCount - 1 }}</p>
    </div>
</template>

<script setup lang="ts">
import { PropType, computed } from "vue";

import { Option } from "@components/DropdownBase/types";

const props = defineProps({
    options: {
        type: Array as PropType<Option[]>,
        required: true,
        default: () => [],
    },
});

const optionsCount = computed<number>(() => props.options.length);
</script>

<style lang="scss">
.select-label-multiple {
    @include lineUp("left", "horizontal");
    --lineup-gap: var(--grid-gap-third);
    --lineup-align: center;
}
</style>
