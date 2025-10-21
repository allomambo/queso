import { QuesoDropdownOptions } from './types';

declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<{
    modelValue: import('vue').PropType<import('./types').QuesoDropdownOptionValues>;
    options: {
        type: import('vue').PropType<QuesoDropdownOptions>;
        required: true;
    };
    multiple: {
        type: import('vue').PropType<boolean>;
    };
    stayOpenOnSelection: {
        type: import('vue').PropType<boolean>;
    };
}, {
    isDropdownOpen: import('vue').Ref<boolean>;
    openDropdown: () => void;
    closeDropdown: () => void;
}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "dropdown:open": () => void;
    "dropdown:close": () => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    modelValue: import('vue').PropType<import('./types').QuesoDropdownOptionValues>;
    options: {
        type: import('vue').PropType<QuesoDropdownOptions>;
        required: true;
    };
    multiple: {
        type: import('vue').PropType<boolean>;
    };
    stayOpenOnSelection: {
        type: import('vue').PropType<boolean>;
    };
}>> & {
    "onDropdown:open"?: (() => any) | undefined;
    "onDropdown:close"?: (() => any) | undefined;
}, {}, {}>, {
    selector?(_: {
        isDropdownOpen: boolean;
        options: QuesoDropdownOptions;
        activeOptions: QuesoDropdownOptions;
    }): any;
    selectorBeforeText?(_: {
        isDropdownOpen: boolean;
        options: QuesoDropdownOptions;
        activeOptions: QuesoDropdownOptions;
    }): any;
    selectorPlaceholder?(_: {
        isDropdownOpen: boolean;
    }): any;
    selectorActiveOptions?(_: {
        isDropdownOpen: boolean;
        activeOptions: QuesoDropdownOptions;
    }): any;
    selectorAfterText?(_: {
        isDropdownOpen: boolean;
        options: QuesoDropdownOptions;
        activeOptions: QuesoDropdownOptions;
    }): any;
    selectorIcon?(_: {
        isDropdownOpen: boolean;
    }): any;
    popoverHeader?(_: {
        options: QuesoDropdownOptions;
        activeOptions: QuesoDropdownOptions;
    }): any;
    popoverItem?(_: {
        openDropdown: () => void;
        closeDropdown: () => void;
        value: string;
        label: string;
        data?: object | undefined;
        index: number;
    }): any;
    popoverFooter?(_: {
        options: QuesoDropdownOptions;
        activeOptions: QuesoDropdownOptions;
    }): any;
    afterDropdown?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
