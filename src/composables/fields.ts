import { computed, reactive } from "vue";

import { isQuesoFieldProps } from "@components/QuesoField/types";
import type { QuesoFieldProps } from "@components/QuesoField";

/**
 * Extracts the props from a field component that are part of the QuesoFieldProps interface.
 * Prevents "unrecognized attribute" warnings and useless attributes in the DOM.
 *
 * @param props The props object
 * @returns The props object with only the QuesoFieldProps props
 *
 * @example
 * <template>
 *   <queso-field v-bind="extendedProps">
 *     ...
 *   </queso-field>
 * </template>
 *
 * <script setup>
 * import { useExtendedFieldProps } from "@composables/fields";
 *
 * import type { QuesoComponentProps } from "./types";
 *
 * import QuesoField from "@components/QuesoField";
 *
 * const props = defineProps<QuesoComponentProps>();
 * const extendedProps = useExtendedFieldProps(props);
 * </script>
 */
export const useExtendedFieldProps = (props: any) => {
    return computed<QuesoFieldProps>(() => {
        const extendedProps = {} as QuesoFieldProps;

        for (const prop in props) {
            if (isQuesoFieldProps(prop)) {
                extendedProps[prop] = props[prop];
            }
        }

        return extendedProps;
    });
};

export default useExtendedFieldProps;
