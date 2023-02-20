import type { PropType as __PropType } from 'vue';
import { Option } from "./types";
export interface Props {
    defaultOptions?: Option[];
    options: Option[];
    multiple?: boolean;
    stayOpenOnSelection?: boolean;
}
declare const _sfc_main: import("vue").DefineComponent<{
    defaultOptions: {
        type: __PropType<Option[]>;
        required: false;
        default: () => any[];
    };
    options: {
        type: __PropType<Option[]>;
        required: true;
        default: () => any[];
    };
    multiple: {
        type: __PropType<boolean>;
        required: false;
    };
    stayOpenOnSelection: {
        type: __PropType<boolean>;
        required: false;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:options" | "open:dropdown" | "close:dropdown")[], "update:options" | "open:dropdown" | "close:dropdown", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    defaultOptions: {
        type: __PropType<Option[]>;
        required: false;
        default: () => any[];
    };
    options: {
        type: __PropType<Option[]>;
        required: true;
        default: () => any[];
    };
    multiple: {
        type: __PropType<boolean>;
        required: false;
    };
    stayOpenOnSelection: {
        type: __PropType<boolean>;
        required: false;
    };
}>> & {
    "onUpdate:options"?: (...args: any[]) => any;
    "onOpen:dropdown"?: (...args: any[]) => any;
    "onClose:dropdown"?: (...args: any[]) => any;
}, {
    defaultOptions: Option[];
    options: Option[];
}>;
export default _sfc_main;
