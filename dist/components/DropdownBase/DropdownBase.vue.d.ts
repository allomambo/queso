import { Option } from "./types";
export interface Props {
    defaultOptions?: Option[];
    options: Option[];
    multiple?: boolean;
    stayOpenOnSelection?: boolean;
}
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    multiple: {
        type: import("vue").PropType<boolean>;
    };
    defaultOptions: {
        type: import("vue").PropType<Option[]>;
        default: () => any[];
    };
    options: {
        type: import("vue").PropType<Option[]>;
        required: true;
        default: () => any[];
    };
    stayOpenOnSelection: {
        type: import("vue").PropType<boolean>;
    };
}, {
    isDropdownOpen: import("vue").Ref<boolean>;
    openDropdown: () => void;
    closeDropdown: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:options" | "open:dropdown" | "close:dropdown")[], "update:options" | "open:dropdown" | "close:dropdown", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    multiple: {
        type: import("vue").PropType<boolean>;
    };
    defaultOptions: {
        type: import("vue").PropType<Option[]>;
        default: () => any[];
    };
    options: {
        type: import("vue").PropType<Option[]>;
        required: true;
        default: () => any[];
    };
    stayOpenOnSelection: {
        type: import("vue").PropType<boolean>;
    };
}>> & {
    "onUpdate:options"?: (...args: any[]) => any;
    "onOpen:dropdown"?: (...args: any[]) => any;
    "onClose:dropdown"?: (...args: any[]) => any;
}, {
    defaultOptions: Option[];
    options: Option[];
}>, {
    prefix?(_: {}): any;
    placeholder?(_: {}): any;
    selector?(_: {
        activeOptions: Option[];
    }): any;
    suffix?(_: {}): any;
    icon?(_: {}): any;
    popoverHeader?(_: {}): any;
    beforeItems?(_: {}): any;
    item?(_: {
        openDropdown: () => void;
        closeDropdown: () => void;
        key: string | number;
        data: any;
    }): any;
    afterItems?(_: {}): any;
    popoverFooter?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
