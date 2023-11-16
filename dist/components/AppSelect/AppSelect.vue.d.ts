import { Option } from '../DropdownBase/types';
export interface Props {
    options: Option[];
    multiple?: boolean;
    placeholder?: string;
}
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    placeholder: {
        type: import("vue").PropType<string>;
    };
    multiple: {
        type: import("vue").PropType<boolean>;
    };
    options: {
        type: import("vue").PropType<Option[]>;
        required: true;
        default: () => any[];
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    placeholder: {
        type: import("vue").PropType<string>;
    };
    multiple: {
        type: import("vue").PropType<boolean>;
    };
    options: {
        type: import("vue").PropType<Option[]>;
        required: true;
        default: () => any[];
    };
}>>, {
    options: Option[];
}>, {
    label?(_: {}): any;
    placeholder?(_: {
        placeholder: string;
    }): any;
    selector?(_: {
        activeOptions: Option[];
    }): any;
    icon?(_: {}): any;
    item?(_: {
        key: string | number;
        data: any;
    }): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
