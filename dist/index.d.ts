import { ComponentOptionsMixin } from 'vue';
import { DefineComponent } from 'vue';
import { ExtractPropTypes } from 'vue';
import { PropType } from 'vue';
import { PublicProps } from 'vue';
import { Ref } from 'vue';

declare type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;

declare type __VLS_NonUndefinedable_10<T> = T extends undefined ? never : T;

declare type __VLS_NonUndefinedable_2<T> = T extends undefined ? never : T;

declare type __VLS_NonUndefinedable_3<T> = T extends undefined ? never : T;

declare type __VLS_NonUndefinedable_4<T> = T extends undefined ? never : T;

declare type __VLS_NonUndefinedable_5<T> = T extends undefined ? never : T;

declare type __VLS_NonUndefinedable_6<T> = T extends undefined ? never : T;

declare type __VLS_NonUndefinedable_7<T> = T extends undefined ? never : T;

declare type __VLS_NonUndefinedable_8<T> = T extends undefined ? never : T;

declare type __VLS_NonUndefinedable_9<T> = T extends undefined ? never : T;

declare type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};

declare type __VLS_Prettify_2<T> = {
    [K in keyof T]: T[K];
} & {};

declare type __VLS_Prettify_3<T> = {
    [K in keyof T]: T[K];
} & {};

declare type __VLS_Prettify_4<T> = {
    [K in keyof T]: T[K];
} & {};

declare type __VLS_Prettify_5<T> = {
    [K in keyof T]: T[K];
} & {};

declare type __VLS_Prettify_6<T> = {
    [K in keyof T]: T[K];
} & {};

declare type __VLS_Prettify_7<T> = {
    [K in keyof T]: T[K];
} & {};

declare type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: PropType<T[K]>;
        required: true;
    };
};

declare type __VLS_TypePropsToRuntimeProps_10<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: PropType<__VLS_NonUndefinedable_10<T[K]>>;
    } : {
        type: PropType<T[K]>;
        required: true;
    };
};

declare type __VLS_TypePropsToRuntimeProps_2<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: PropType<__VLS_NonUndefinedable_2<T[K]>>;
    } : {
        type: PropType<T[K]>;
        required: true;
    };
};

declare type __VLS_TypePropsToRuntimeProps_3<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: PropType<__VLS_NonUndefinedable_3<T[K]>>;
    } : {
        type: PropType<T[K]>;
        required: true;
    };
};

declare type __VLS_TypePropsToRuntimeProps_4<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: PropType<__VLS_NonUndefinedable_4<T[K]>>;
    } : {
        type: PropType<T[K]>;
        required: true;
    };
};

declare type __VLS_TypePropsToRuntimeProps_5<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: PropType<__VLS_NonUndefinedable_5<T[K]>>;
    } : {
        type: PropType<T[K]>;
        required: true;
    };
};

declare type __VLS_TypePropsToRuntimeProps_6<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: PropType<__VLS_NonUndefinedable_6<T[K]>>;
    } : {
        type: PropType<T[K]>;
        required: true;
    };
};

declare type __VLS_TypePropsToRuntimeProps_7<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: PropType<__VLS_NonUndefinedable_7<T[K]>>;
    } : {
        type: PropType<T[K]>;
        required: true;
    };
};

declare type __VLS_TypePropsToRuntimeProps_8<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: PropType<__VLS_NonUndefinedable_8<T[K]>>;
    } : {
        type: PropType<T[K]>;
        required: true;
    };
};

declare type __VLS_TypePropsToRuntimeProps_9<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: PropType<__VLS_NonUndefinedable_9<T[K]>>;
    } : {
        type: PropType<T[K]>;
        required: true;
    };
};

declare type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify<P[K] & {
        default: D[K];
    }> : P[K];
};

declare type __VLS_WithDefaults_2<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify_2<P[K] & {
        default: D[K];
    }> : P[K];
};

declare type __VLS_WithDefaults_3<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify_3<P[K] & {
        default: D[K];
    }> : P[K];
};

declare type __VLS_WithDefaults_4<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify_4<P[K] & {
        default: D[K];
    }> : P[K];
};

declare type __VLS_WithDefaults_5<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify_5<P[K] & {
        default: D[K];
    }> : P[K];
};

declare type __VLS_WithDefaults_6<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify_6<P[K] & {
        default: D[K];
    }> : P[K];
};

declare type __VLS_WithDefaults_7<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify_7<P[K] & {
        default: D[K];
    }> : P[K];
};

declare type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare type __VLS_WithTemplateSlots_10<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare type __VLS_WithTemplateSlots_11<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare type __VLS_WithTemplateSlots_12<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare type __VLS_WithTemplateSlots_13<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare type __VLS_WithTemplateSlots_14<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare type __VLS_WithTemplateSlots_15<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare type __VLS_WithTemplateSlots_16<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare type __VLS_WithTemplateSlots_17<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare type __VLS_WithTemplateSlots_18<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare type __VLS_WithTemplateSlots_2<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare type __VLS_WithTemplateSlots_3<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare type __VLS_WithTemplateSlots_4<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare type __VLS_WithTemplateSlots_5<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare type __VLS_WithTemplateSlots_6<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare type __VLS_WithTemplateSlots_7<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare type __VLS_WithTemplateSlots_8<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare type __VLS_WithTemplateSlots_9<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare type FieldTypes = "text" | "url" | "tel" | "email" | "password";

declare interface Option_2 {
    key: string | number;
    data: any;
}

declare interface Props {
    id?: string;
    name?: string;
    modelValue?: any;
    label?: string;
    isRequired?: boolean;
    isDisabled?: boolean;
    isReadOnly?: boolean;
    isError?: boolean;
    isAutocomplete?: boolean;
}

declare interface Props_2 {
    defaultOptions?: Option_2[];
    options: Option_2[];
    multiple?: boolean;
    stayOpenOnSelection?: boolean;
}

declare interface Props_3 {
    type?: FieldTypes;
    placeholder?: string;
}

declare interface Props_4 {
    placeholder?: string;
}

declare interface Props_5 {
    options: Option_2[];
    multiple?: boolean;
    placeholder?: string;
}

export declare const QuesoCheckbox: __VLS_WithTemplateSlots_10<DefineComponent<    {
modelValue: {
required: true;
type: PropType<boolean>;
};
boxLabel: {
type: PropType<string>;
required: true;
};
id: {
type: PropType<string>;
};
name: {
type: PropType<string>;
required: true;
};
label: {
type: PropType<string>;
};
isError: {
type: PropType<boolean>;
};
isRequired: {
type: PropType<boolean>;
};
isDisabled: {
type: PropType<boolean>;
};
isReadOnly: {
type: PropType<boolean>;
};
extraAttributes: {
type: PropType<QuesoFieldBaseExtraAttributes>;
};
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<ExtractPropTypes<    {
modelValue: {
required: true;
type: PropType<boolean>;
};
boxLabel: {
type: PropType<string>;
required: true;
};
id: {
type: PropType<string>;
};
name: {
type: PropType<string>;
required: true;
};
label: {
type: PropType<string>;
};
isError: {
type: PropType<boolean>;
};
isRequired: {
type: PropType<boolean>;
};
isDisabled: {
type: PropType<boolean>;
};
isReadOnly: {
type: PropType<boolean>;
};
extraAttributes: {
type: PropType<QuesoFieldBaseExtraAttributes>;
};
}>>, {}, {}>, {
    beforeLabel?(_: {}): any;
    label?(_: {
        label: string;
    }): any;
    required?(_: {
        isRequired: true;
    }): any;
    afterLabel?(_: {}): any;
    beforeInput?(_: {}): any;
    checkboxBox?(_: {}): any;
    checkboxBoxSymbol?(_: {}): any;
    checkboxLabel?(_: {}): any;
    checkboxLabelRequired?(_: {
        isRequired: true;
    }): any;
    afterInput?(_: {}): any;
    error?(_: {
        fieldID: string;
        fieldName: string;
        fieldLabel: string | undefined;
        isRequired: boolean;
        isActive: boolean;
        isHover: boolean;
        isDisabled: boolean;
        isError: boolean;
        isReadOnly: boolean;
        toggleIsActive: (bool?: boolean) => void;
        toggleIsHover: (bool?: boolean) => void;
    }): any;
}>;

export declare const QuesoCheckboxLegacy: __VLS_WithTemplateSlots_16<DefineComponent<    {}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<ExtractPropTypes<    {}>>, {}, {}>, {
    beforeField?(_: {}): any;
    symbol?(_: {}): any;
    afterField?(_: {}): any;
    error?(_: {
        fieldID: string;
        fieldName: string | undefined;
        fieldValue: any;
        fieldLabel: string | undefined;
        fieldAutocomplete: string | undefined;
        isRequired: boolean;
        isActive: boolean;
        isHover: boolean;
        isFilled: boolean;
        isDisabled: boolean;
        isError: boolean;
        isReadOnly: boolean;
        updateValue: (data: any) => void;
        toggleIsActive: (bool?: boolean) => void;
        toggleIsHover: (bool?: boolean) => void;
    }): any;
}>;

export declare const QuesoClickable: __VLS_WithTemplateSlots<DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<QuesoClickableProps>, {
markup: string;
}>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<QuesoClickableProps>, {
markup: string;
}>>>, {
markup: QuesoClickableMarkup;
}, {}>, {
    default?(_: {}): any;
}>;

declare type QuesoClickableMarkup = "button" | "a" | "router-link" | "div" | "span";

declare interface QuesoClickableProps {
    markup?: QuesoClickableMarkup;
    url?: string | object;
    isDisabled?: boolean;
    isExternal?: boolean;
    isDownload?: boolean;
}

export declare const QuesoCollapsible: __VLS_WithTemplateSlots_4<DefineComponent<__VLS_TypePropsToRuntimeProps_2<QuesoCollapsibleProps>, {
isCollapsibleOpen: Ref<boolean>;
open: () => void;
close: () => void;
toggle: (bool?: boolean) => void;
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
"collapsible:open": () => void;
"collapsible:close": () => void;
"collapsible:toggle": (args_0: boolean) => void;
}, string, PublicProps, Readonly<ExtractPropTypes<__VLS_TypePropsToRuntimeProps_2<QuesoCollapsibleProps>>> & {
"onCollapsible:open"?: (() => any) | undefined;
"onCollapsible:close"?: (() => any) | undefined;
"onCollapsible:toggle"?: ((args_0: boolean) => any) | undefined;
}, {}, {}>, {
    beforeHeader?(_: {}): any;
    header?(_: {
        isCollapsibleOpen: boolean;
    }): any;
    headerPrefix?(_: {}): any;
    headerText?(_: {
        isCollapsibleOpen: boolean;
    }): any;
    headerSuffix?(_: {}): any;
    headerIcon?(_: {
        isCollapsibleOpen: boolean;
    }): any;
    afterHeader?(_: {}): any;
    beforeContent?(_: {}): any;
    content?(_: {}): any;
    afterContent?(_: {}): any;
}>;

declare interface QuesoCollapsibleProps {
    expandOnMount?: boolean;
}

export declare const QuesoDropdown: __VLS_WithTemplateSlots_2<DefineComponent<    {
modelValue: PropType<QuesoDropdownOptionValues>;
options: {
type: PropType<QuesoDropdownOptions>;
required: true;
};
multiple: {
type: PropType<boolean>;
};
stayOpenOnSelection: {
type: PropType<boolean>;
};
}, {
isDropdownOpen: Ref<boolean>;
openDropdown: () => void;
closeDropdown: () => void;
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
"open:dropdown": () => void;
"close:dropdown": () => void;
}, string, PublicProps, Readonly<ExtractPropTypes<    {
modelValue: PropType<QuesoDropdownOptionValues>;
options: {
type: PropType<QuesoDropdownOptions>;
required: true;
};
multiple: {
type: PropType<boolean>;
};
stayOpenOnSelection: {
type: PropType<boolean>;
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

export declare const QuesoDropdownLegacy: __VLS_WithTemplateSlots_13<DefineComponent<__VLS_WithDefaults_4<__VLS_TypePropsToRuntimeProps_7<Props_2>, {
defaultOptions: () => never[];
options: () => never[];
}>, {
isDropdownOpen: Ref<boolean>;
openDropdown: () => void;
closeDropdown: () => void;
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
"open:dropdown": (...args: any[]) => void;
"close:dropdown": (...args: any[]) => void;
"update:options": (...args: any[]) => void;
}, string, PublicProps, Readonly<ExtractPropTypes<__VLS_WithDefaults_4<__VLS_TypePropsToRuntimeProps_7<Props_2>, {
defaultOptions: () => never[];
options: () => never[];
}>>> & {
"onOpen:dropdown"?: ((...args: any[]) => any) | undefined;
"onClose:dropdown"?: ((...args: any[]) => any) | undefined;
"onUpdate:options"?: ((...args: any[]) => any) | undefined;
}, {
options: Option_2[];
defaultOptions: Option_2[];
}, {}>, {
    header?(_: {
        activeOptions: Option_2[];
    }): any;
    prefix?(_: {}): any;
    placeholder?(_: {}): any;
    selector?(_: {
        activeOptions: Option_2[];
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

declare interface QuesoDropdownOption {
    value: QuesoDropdownOptionValue;
    label: string;
    data?: object;
}

declare type QuesoDropdownOptions = QuesoDropdownOption[];

declare type QuesoDropdownOptionValue = string;

declare type QuesoDropdownOptionValues = QuesoDropdownOptionValue[];

export declare const QuesoField: __VLS_WithTemplateSlots_7<DefineComponent<__VLS_TypePropsToRuntimeProps_5<QuesoFieldPrivateProps>, {
fieldID: string;
fieldName: string;
fieldLabel: string | undefined;
isRequired: boolean;
isActive: boolean;
isHover: boolean;
isDisabled: boolean;
isError: boolean;
isReadOnly: boolean;
toggleIsActive: (bool?: boolean) => void;
toggleIsHover: (bool?: boolean) => void;
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
"input:hover": (args_0: boolean) => void;
"input:hover:enter": () => void;
"input:hover:leave": () => void;
"input:active": (args_0: boolean) => void;
"input:active:focus": () => void;
"input:active:blur": () => void;
}, string, PublicProps, Readonly<ExtractPropTypes<__VLS_TypePropsToRuntimeProps_5<QuesoFieldPrivateProps>>> & {
"onInput:hover"?: ((args_0: boolean) => any) | undefined;
"onInput:hover:enter"?: (() => any) | undefined;
"onInput:hover:leave"?: (() => any) | undefined;
"onInput:active"?: ((args_0: boolean) => any) | undefined;
"onInput:active:focus"?: (() => any) | undefined;
"onInput:active:blur"?: (() => any) | undefined;
}, {}, {}>, {
    beforeLabel?(_: {}): any;
    label?(_: {
        label: string;
    }): any;
    required?(_: {
        isRequired: true;
    }): any;
    afterLabel?(_: {}): any;
    beforeInput?(_: {}): any;
    input?(_: {
        fieldID: string;
        fieldName: string;
        fieldLabel: string | undefined;
        isRequired: boolean;
        isActive: boolean;
        isHover: boolean;
        isDisabled: boolean;
        isError: boolean;
        isReadOnly: boolean;
        toggleIsActive: (bool?: boolean) => void;
        toggleIsHover: (bool?: boolean) => void;
    }): any;
    afterInput?(_: {}): any;
    error?(_: {
        fieldID: string;
        fieldName: string;
        fieldLabel: string | undefined;
        isRequired: boolean;
        isActive: boolean;
        isHover: boolean;
        isDisabled: boolean;
        isError: boolean;
        isReadOnly: boolean;
        toggleIsActive: (bool?: boolean) => void;
        toggleIsHover: (bool?: boolean) => void;
    }): any;
}>;

declare type QuesoFieldBaseExtraAttributes = Record<string, string>;

export declare const QuesoFieldLegacy: __VLS_WithTemplateSlots_12<DefineComponent<__VLS_TypePropsToRuntimeProps_6<Props>, {
fieldID: string;
fieldName: string | undefined;
fieldValue: any;
fieldLabel: string | undefined;
fieldAutocomplete: string | undefined;
isRequired: boolean;
isActive: boolean;
isHover: boolean;
isFilled: boolean;
isDisabled: boolean;
isError: boolean;
isReadOnly: boolean;
updateValue: (data: any) => void;
toggleIsActive: (bool?: boolean) => void;
toggleIsHover: (bool?: boolean) => void;
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
"update:modelValue": (...args: any[]) => void;
}, string, PublicProps, Readonly<ExtractPropTypes<__VLS_TypePropsToRuntimeProps_6<Props>>> & {
"onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {}, {}>, {
    label?(_: {
        fieldID: string;
        fieldName: string | undefined;
        fieldValue: any;
        fieldLabel: string | undefined;
        fieldAutocomplete: string | undefined;
        isRequired: boolean;
        isActive: boolean;
        isHover: boolean;
        isFilled: boolean;
        isDisabled: boolean;
        isError: boolean;
        isReadOnly: boolean;
        updateValue: (data: any) => void;
        toggleIsActive: (bool?: boolean) => void;
        toggleIsHover: (bool?: boolean) => void;
    }): any;
    beforeField?(_: {}): any;
    field?(_: {
        fieldID: string;
        fieldName: string | undefined;
        fieldValue: any;
        fieldLabel: string | undefined;
        fieldAutocomplete: string | undefined;
        isRequired: boolean;
        isActive: boolean;
        isHover: boolean;
        isFilled: boolean;
        isDisabled: boolean;
        isError: boolean;
        isReadOnly: boolean;
        updateValue: (data: any) => void;
        toggleIsActive: (bool?: boolean) => void;
        toggleIsHover: (bool?: boolean) => void;
    }): any;
    afterField?(_: {}): any;
    error?(_: {
        fieldID: string;
        fieldName: string | undefined;
        fieldValue: any;
        fieldLabel: string | undefined;
        fieldAutocomplete: string | undefined;
        isRequired: boolean;
        isActive: boolean;
        isHover: boolean;
        isFilled: boolean;
        isDisabled: boolean;
        isError: boolean;
        isReadOnly: boolean;
        updateValue: (data: any) => void;
        toggleIsActive: (bool?: boolean) => void;
        toggleIsHover: (bool?: boolean) => void;
    }): any;
}>;

declare interface QuesoFieldPrivateProps extends QuesoFieldProps {
    hasStaticLabel?: boolean;
}

declare interface QuesoFieldProps {
    id?: string;
    name: string;
    label?: string;
    isError?: boolean;
    isRequired?: boolean;
    isDisabled?: boolean;
    isReadOnly?: boolean;
}

export declare const QuesoIcon: __VLS_WithTemplateSlots_6<DefineComponent<__VLS_WithDefaults_3<__VLS_TypePropsToRuntimeProps_4<QuesoIconProps>, {
size: number;
sizeUnit: string;
rotation: number;
}>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<ExtractPropTypes<__VLS_WithDefaults_3<__VLS_TypePropsToRuntimeProps_4<QuesoIconProps>, {
size: number;
sizeUnit: string;
rotation: number;
}>>>, {
size: number;
sizeUnit: QuesoIconSizeUnit;
rotation: number;
}, {}>, {
    default?(_: {
        width: string;
        rotation: string;
        iconID: string;
        svg: string | SVGElement | undefined;
        name: string | undefined;
        prefix: string | undefined;
        size: number;
        sizeUnit: QuesoIconSizeUnit;
    }): any;
}>;

declare interface QuesoIconProps {
    svg?: SVGElement | string;
    name?: string;
    prefix?: string;
    size?: number;
    sizeUnit?: QuesoIconSizeUnit;
    rotation?: number;
}

declare type QuesoIconSizeUnit = "px" | "cm" | "mm" | "in" | "pt" | "pc" | "em" | "rem" | "ex" | "ch" | "vw" | "vh" | "vmin" | "vmax" | "%" | "fr";

export declare const QuesoModal: __VLS_WithTemplateSlots_3<DefineComponent<    {}, {
isModalOpen: Ref<boolean>;
open: QuesoModalOpen;
close: QuesoModalClose;
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
"modal:open": (...args: any[]) => void;
"modal:close": (...args: any[]) => void;
}, string, PublicProps, Readonly<ExtractPropTypes<    {}>> & {
"onModal:open"?: ((...args: any[]) => any) | undefined;
"onModal:close"?: ((...args: any[]) => any) | undefined;
}, {}, {}>, {
    beforeContent?(_: {}): any;
    default?(_: {}): any;
    afterContent?(_: {}): any;
    overlay?(_: {}): any;
}>;

declare type QuesoModalClose = () => void;

declare type QuesoModalOpen = () => void;

export declare const QuesoScrollable: __VLS_WithTemplateSlots_5<DefineComponent<__VLS_WithDefaults_2<__VLS_TypePropsToRuntimeProps_3<QuesoScrollableProps>, {
offset: number;
}>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
"scrollable:top:arrived": () => void;
"scrollable:bottom:arrived": () => void;
}, string, PublicProps, Readonly<ExtractPropTypes<__VLS_WithDefaults_2<__VLS_TypePropsToRuntimeProps_3<QuesoScrollableProps>, {
offset: number;
}>>> & {
"onScrollable:top:arrived"?: (() => any) | undefined;
"onScrollable:bottom:arrived"?: (() => any) | undefined;
}, {
offset: number;
}, {}>, {
    default?(_: {}): any;
}>;

declare interface QuesoScrollableProps {
    shadows?: boolean;
    offset?: number;
}

export declare const QuesoSelect: __VLS_WithTemplateSlots_11<DefineComponent<    {
modelValue: {
required: true;
type: PropType<string>;
};
options: {
type: PropType<QuesoDropdownOptions>;
required: true;
};
placeholder: {
type: PropType<string>;
};
id: {
type: PropType<string>;
};
name: {
type: PropType<string>;
required: true;
};
label: {
type: PropType<string>;
};
isError: {
type: PropType<boolean>;
};
isRequired: {
type: PropType<boolean>;
};
isDisabled: {
type: PropType<boolean>;
};
isReadOnly: {
type: PropType<boolean>;
};
extraAttributes: {
type: PropType<QuesoFieldBaseExtraAttributes>;
};
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<ExtractPropTypes<    {
modelValue: {
required: true;
type: PropType<string>;
};
options: {
type: PropType<QuesoDropdownOptions>;
required: true;
};
placeholder: {
type: PropType<string>;
};
id: {
type: PropType<string>;
};
name: {
type: PropType<string>;
required: true;
};
label: {
type: PropType<string>;
};
isError: {
type: PropType<boolean>;
};
isRequired: {
type: PropType<boolean>;
};
isDisabled: {
type: PropType<boolean>;
};
isReadOnly: {
type: PropType<boolean>;
};
extraAttributes: {
type: PropType<QuesoFieldBaseExtraAttributes>;
};
}>>, {}, {}>, {
    beforeLabel?(_: {}): any;
    label?(_: {
        label: string;
    }): any;
    required?(_: {
        isRequired: true;
    }): any;
    afterLabel?(_: {}): any;
    beforeInput?(_: {}): any;
    placeholder?(_: {
        placeholder: string | undefined;
    }): any;
    selector?(_: {
        activeOptions: QuesoDropdownOptions;
    }): any;
    icon?(_: {}): any;
    item?(_: {
        value: string;
        label: string;
        data: object | undefined;
    }): any;
    afterInput?(_: {}): any;
    error?(_: {
        fieldID: string;
        fieldName: string;
        fieldLabel: string | undefined;
        isRequired: boolean;
        isActive: boolean;
        isHover: boolean;
        isDisabled: boolean;
        isError: boolean;
        isReadOnly: boolean;
        toggleIsActive: (bool?: boolean) => void;
        toggleIsHover: (bool?: boolean) => void;
    }): any;
}>;

export declare const QuesoSelectLegacy: __VLS_WithTemplateSlots_17<DefineComponent<__VLS_WithDefaults_7<__VLS_TypePropsToRuntimeProps_10<Props_5>, {
options: () => never[];
}>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<ExtractPropTypes<__VLS_WithDefaults_7<__VLS_TypePropsToRuntimeProps_10<Props_5>, {
options: () => never[];
}>>>, {
options: Option_2[];
}, {}>, {
    label?(_: {}): any;
    placeholder?(_: {
        placeholder: string | undefined;
    }): any;
    selector?(_: {
        activeOptions: Option_2[];
    }): any;
    icon?(_: {}): any;
    item?(_: {
        key: string | number;
        data: any;
    }): any;
    error?(_: {
        fieldID: string;
        fieldName: string | undefined;
        fieldValue: any;
        fieldLabel: string | undefined;
        fieldAutocomplete: string | undefined;
        isRequired: boolean;
        isActive: boolean;
        isHover: boolean;
        isFilled: boolean;
        isDisabled: boolean;
        isError: boolean;
        isReadOnly: boolean;
        updateValue: (data: any) => void;
        toggleIsActive: (bool?: boolean) => void;
        toggleIsHover: (bool?: boolean) => void;
    }): any;
}>;

export declare const QuesoSwitchLegacy: __VLS_WithTemplateSlots_18<DefineComponent<    {}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<ExtractPropTypes<    {}>>, {}, {}>, {
    beforeField?(_: {}): any;
    afterField?(_: {}): any;
    error?(_: {
        fieldID: string;
        fieldName: string | undefined;
        fieldValue: any;
        fieldLabel: string | undefined;
        fieldAutocomplete: string | undefined;
        isRequired: boolean;
        isActive: boolean;
        isHover: boolean;
        isFilled: boolean;
        isDisabled: boolean;
        isError: boolean;
        isReadOnly: boolean;
        updateValue: (data: any) => void;
        toggleIsActive: (bool?: boolean) => void;
        toggleIsHover: (bool?: boolean) => void;
    }): any;
}>;

export declare const QuesoTextArea: __VLS_WithTemplateSlots_9<DefineComponent<    {
modelValue: {
required: true;
type: PropType<string>;
};
placeholder: {
type: PropType<string>;
};
id: {
type: PropType<string>;
};
name: {
type: PropType<string>;
required: true;
};
label: {
type: PropType<string>;
};
isError: {
type: PropType<boolean>;
};
isRequired: {
type: PropType<boolean>;
};
isDisabled: {
type: PropType<boolean>;
};
isReadOnly: {
type: PropType<boolean>;
};
extraAttributes: {
type: PropType<QuesoFieldBaseExtraAttributes>;
};
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<ExtractPropTypes<    {
modelValue: {
required: true;
type: PropType<string>;
};
placeholder: {
type: PropType<string>;
};
id: {
type: PropType<string>;
};
name: {
type: PropType<string>;
required: true;
};
label: {
type: PropType<string>;
};
isError: {
type: PropType<boolean>;
};
isRequired: {
type: PropType<boolean>;
};
isDisabled: {
type: PropType<boolean>;
};
isReadOnly: {
type: PropType<boolean>;
};
extraAttributes: {
type: PropType<QuesoFieldBaseExtraAttributes>;
};
}>>, {}, {}>, {
    beforeLabel?(_: {}): any;
    label?(_: {
        label: string;
    }): any;
    required?(_: {
        isRequired: true;
    }): any;
    afterLabel?(_: {}): any;
    beforeInput?(_: {}): any;
    beforeTextAreaInput?(_: {}): any;
    afterTextAreaInput?(_: {}): any;
    afterInput?(_: {}): any;
    error?(_: {
        fieldID: string;
        fieldName: string;
        fieldLabel: string | undefined;
        isRequired: boolean;
        isActive: boolean;
        isHover: boolean;
        isDisabled: boolean;
        isError: boolean;
        isReadOnly: boolean;
        toggleIsActive: (bool?: boolean) => void;
        toggleIsHover: (bool?: boolean) => void;
    }): any;
}>;

export declare const QuesoTextAreaLegacy: __VLS_WithTemplateSlots_15<DefineComponent<__VLS_WithDefaults_6<__VLS_TypePropsToRuntimeProps_9<Props_4>, {
placeholder: string;
}>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<ExtractPropTypes<__VLS_WithDefaults_6<__VLS_TypePropsToRuntimeProps_9<Props_4>, {
placeholder: string;
}>>>, {
placeholder: string;
}, {}>, {
    label?(_: {
        fieldID: string;
        fieldName: string | undefined;
        fieldValue: any;
        fieldLabel: string | undefined;
        fieldAutocomplete: string | undefined;
        isRequired: boolean;
        isActive: boolean;
        isHover: boolean;
        isFilled: boolean;
        isDisabled: boolean;
        isError: boolean;
        isReadOnly: boolean;
        updateValue: (data: any) => void;
        toggleIsActive: (bool?: boolean) => void;
        toggleIsHover: (bool?: boolean) => void;
    }): any;
    beforeField?(_: {}): any;
    afterField?(_: {}): any;
    error?(_: {
        fieldID: string;
        fieldName: string | undefined;
        fieldValue: any;
        fieldLabel: string | undefined;
        fieldAutocomplete: string | undefined;
        isRequired: boolean;
        isActive: boolean;
        isHover: boolean;
        isFilled: boolean;
        isDisabled: boolean;
        isError: boolean;
        isReadOnly: boolean;
        updateValue: (data: any) => void;
        toggleIsActive: (bool?: boolean) => void;
        toggleIsHover: (bool?: boolean) => void;
    }): any;
}>;

export declare const QuesoTextField: __VLS_WithTemplateSlots_8<DefineComponent<    {
modelValue: {
required: true;
type: PropType<string>;
};
isDisabled: {
type: PropType<boolean>;
};
type: {
type: PropType<QuesoTextFieldType>;
default: string;
};
label: {
type: PropType<string>;
};
name: {
type: PropType<string>;
required: true;
};
id: {
type: PropType<string>;
};
isError: {
type: PropType<boolean>;
};
isRequired: {
type: PropType<boolean>;
};
isReadOnly: {
type: PropType<boolean>;
};
placeholder: {
type: PropType<string>;
};
extraAttributes: {
type: PropType<QuesoFieldBaseExtraAttributes>;
};
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<ExtractPropTypes<    {
modelValue: {
required: true;
type: PropType<string>;
};
isDisabled: {
type: PropType<boolean>;
};
type: {
type: PropType<QuesoTextFieldType>;
default: string;
};
label: {
type: PropType<string>;
};
name: {
type: PropType<string>;
required: true;
};
id: {
type: PropType<string>;
};
isError: {
type: PropType<boolean>;
};
isRequired: {
type: PropType<boolean>;
};
isReadOnly: {
type: PropType<boolean>;
};
placeholder: {
type: PropType<string>;
};
extraAttributes: {
type: PropType<QuesoFieldBaseExtraAttributes>;
};
}>>, {
type: QuesoTextFieldType;
}, {}>, {
    beforeLabel?(_: {}): any;
    label?(_: {
        label: string;
    }): any;
    required?(_: {
        isRequired: true;
    }): any;
    afterLabel?(_: {}): any;
    beforeInput?(_: {}): any;
    beforeTextFieldInput?(_: {}): any;
    afterTextFieldInput?(_: {}): any;
    afterInput?(_: {}): any;
    error?(_: {
        fieldID: string;
        fieldName: string;
        fieldLabel: string | undefined;
        isRequired: boolean;
        isActive: boolean;
        isHover: boolean;
        isDisabled: boolean;
        isError: boolean;
        isReadOnly: boolean;
        toggleIsActive: (bool?: boolean) => void;
        toggleIsHover: (bool?: boolean) => void;
    }): any;
}>;

export declare const QuesoTextFieldLegacy: __VLS_WithTemplateSlots_14<DefineComponent<__VLS_WithDefaults_5<__VLS_TypePropsToRuntimeProps_8<Props_3>, {
type: string;
placeholder: string;
}>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<ExtractPropTypes<__VLS_WithDefaults_5<__VLS_TypePropsToRuntimeProps_8<Props_3>, {
type: string;
placeholder: string;
}>>>, {
type: FieldTypes;
placeholder: string;
}, {}>, {
    label?(_: {
        fieldID: string;
        fieldName: string | undefined;
        fieldValue: any;
        fieldLabel: string | undefined;
        fieldAutocomplete: string | undefined;
        isRequired: boolean;
        isActive: boolean;
        isHover: boolean;
        isFilled: boolean;
        isDisabled: boolean;
        isError: boolean;
        isReadOnly: boolean;
        updateValue: (data: any) => void;
        toggleIsActive: (bool?: boolean) => void;
        toggleIsHover: (bool?: boolean) => void;
    }): any;
    beforeField?(_: {}): any;
    after?(_: {}): any;
    afterField?(_: {}): any;
    error?(_: {
        fieldID: string;
        fieldName: string | undefined;
        fieldValue: any;
        fieldLabel: string | undefined;
        fieldAutocomplete: string | undefined;
        isRequired: boolean;
        isActive: boolean;
        isHover: boolean;
        isFilled: boolean;
        isDisabled: boolean;
        isError: boolean;
        isReadOnly: boolean;
        updateValue: (data: any) => void;
        toggleIsActive: (bool?: boolean) => void;
        toggleIsHover: (bool?: boolean) => void;
    }): any;
}>;

declare type QuesoTextFieldType = "text" | "url" | "tel" | "email" | "password";

export { }
