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
    "open:dropdown": () => void;
    "close:dropdown": () => void;
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
    "onOpen:dropdown"?: (() => any) | undefined;
    "onClose:dropdown"?: (() => any) | undefined;
}, {}, {}>, {
    selector?(_: {
        options: QuesoDropdownOptions;
        activeOptions: QuesoDropdownOptions;
    }): any;
    selectorBeforeText?(_: {}): any;
    selectorPlaceholder?(_: {}): any;
    selectorActiveOptions?(_: {
        activeOptions: QuesoDropdownOptions;
    }): any;
    selectorAfterText?(_: {}): any;
    selectorIcon?(_: {}): any;
    popoverHeader?(_: {}): any;
    item?(_: {
        openDropdown: () => void;
        closeDropdown: () => void;
        value: string;
        label: string;
        data?: object | undefined;
    }): any;
    popoverFooter?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
