import type { PropType as __PropType } from 'vue';
import { Option } from '../DropdownBase/types';
export interface Props {
    options: Option[];
    multiple?: boolean;
    placeholder?: string;
}
declare const _sfc_main: import("vue").DefineComponent<{
    options: {
        type: __PropType<Option[]>;
        required: true;
        default: () => any[];
    };
    multiple: {
        type: __PropType<boolean>;
        required: false;
    };
    placeholder: {
        type: __PropType<string>;
        required: false;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    options: {
        type: __PropType<Option[]>;
        required: true;
        default: () => any[];
    };
    multiple: {
        type: __PropType<boolean>;
        required: false;
    };
    placeholder: {
        type: __PropType<string>;
        required: false;
    };
}>>, {
    options: Option[];
}>;
export default _sfc_main;
