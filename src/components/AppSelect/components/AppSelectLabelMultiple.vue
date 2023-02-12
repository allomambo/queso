<template>
    <div class="select-label-multiple">
        <tag-group-item type="plain" size="regular">{{ options[0].data.label }}</tag-group-item>
        <tag-group-item v-if="optionsCount > 1" type="border" color="grey">+{{ optionsCount - 1 }}</tag-group-item>
    </div>
</template>

<script setup lang="ts">
import { PropType, computed } from "vue";

import TagGroupItem from "@components/TagGroup/components/TagGroupItem";

import { Option } from "@components/AppDropdown/types";

const props = defineProps({
    options: {
        type: Array as PropType<Option[]>,
        required: true,
        default: () => [],
    },
});

const optionsCount = computed<number>(() => props.options.length);
</script>

<style lang="scss" scoped>
.select-label-multiple {
    @include lineUp("left", "horizontal");
    --lineup-gap: var(--grid-gap-third);
    --lineup-align: center;
}
</style>
