import { QuesoDropdownOptions } from './types';

declare const _default: <TOptionData extends Record<string, any> = Record<string, any>>(__VLS_props: {
    isDisabled?: boolean | undefined;
    modelValue?: import('./types').QuesoDropdownOptionValues | undefined;
    multiple?: boolean | undefined;
    "onDropdown:open"?: (() => any) | undefined;
    "onDropdown:close"?: (() => any) | undefined;
    options: QuesoDropdownOptions<TOptionData>;
    stayOpenOnSelection?: boolean | undefined;
} & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, __VLS_ctx?: {
    attrs: any;
    slots: {
        selector?(_: {
            isDropdownOpen: boolean;
            options: QuesoDropdownOptions<TOptionData>;
            activeOptions: QuesoDropdownOptions<TOptionData>;
        }): any;
        selectorBeforeText?(_: {
            isDropdownOpen: boolean;
            options: QuesoDropdownOptions<TOptionData>;
            activeOptions: QuesoDropdownOptions<TOptionData>;
        }): any;
        selectorPlaceholder?(_: {
            isDropdownOpen: boolean;
        }): any;
        selectorActiveOptions?(_: {
            isDropdownOpen: boolean;
            activeOptions: QuesoDropdownOptions<TOptionData>;
        }): any;
        selectorAfterText?(_: {
            isDropdownOpen: boolean;
            options: QuesoDropdownOptions<TOptionData>;
            activeOptions: QuesoDropdownOptions<TOptionData>;
        }): any;
        selectorIcon?(_: {
            isDropdownOpen: boolean;
        }): any;
        popoverHeader?(_: {
            options: QuesoDropdownOptions<TOptionData>;
            activeOptions: QuesoDropdownOptions<TOptionData>;
        }): any;
        popoverItem?(_: {
            isSelected: boolean;
            openDropdown: () => void;
            closeDropdown: () => void;
            value: string;
            label: string;
            data?: TOptionData | undefined;
            index: number;
        }): any;
        popoverFooter?(_: {
            options: QuesoDropdownOptions<TOptionData>;
            activeOptions: QuesoDropdownOptions<TOptionData>;
        }): any;
        afterDropdown?(_: {}): any;
    };
    emit: ((evt: "dropdown:open") => void) & ((evt: "dropdown:close") => void);
} | undefined, __VLS_expose?: ((exposed: import('vue').ShallowUnwrapRef<{
    isDropdownOpen: import('vue').Ref<boolean>;
    openDropdown: () => void;
    closeDropdown: () => void;
}>) => void) | undefined, __VLS_setup?: Promise<{
    props: {
        isDisabled?: boolean | undefined;
        modelValue?: import('./types').QuesoDropdownOptionValues | undefined;
        multiple?: boolean | undefined;
        "onDropdown:open"?: (() => any) | undefined;
        "onDropdown:close"?: (() => any) | undefined;
        options: QuesoDropdownOptions<TOptionData>;
        stayOpenOnSelection?: boolean | undefined;
    } & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps;
    expose(exposed: import('vue').ShallowUnwrapRef<{
        isDropdownOpen: import('vue').Ref<boolean>;
        openDropdown: () => void;
        closeDropdown: () => void;
    }>): void;
    attrs: any;
    slots: {
        selector?(_: {
            isDropdownOpen: boolean;
            options: QuesoDropdownOptions<TOptionData>;
            activeOptions: QuesoDropdownOptions<TOptionData>;
        }): any;
        selectorBeforeText?(_: {
            isDropdownOpen: boolean;
            options: QuesoDropdownOptions<TOptionData>;
            activeOptions: QuesoDropdownOptions<TOptionData>;
        }): any;
        selectorPlaceholder?(_: {
            isDropdownOpen: boolean;
        }): any;
        selectorActiveOptions?(_: {
            isDropdownOpen: boolean;
            activeOptions: QuesoDropdownOptions<TOptionData>;
        }): any;
        selectorAfterText?(_: {
            isDropdownOpen: boolean;
            options: QuesoDropdownOptions<TOptionData>;
            activeOptions: QuesoDropdownOptions<TOptionData>;
        }): any;
        selectorIcon?(_: {
            isDropdownOpen: boolean;
        }): any;
        popoverHeader?(_: {
            options: QuesoDropdownOptions<TOptionData>;
            activeOptions: QuesoDropdownOptions<TOptionData>;
        }): any;
        popoverItem?(_: {
            isSelected: boolean;
            openDropdown: () => void;
            closeDropdown: () => void;
            value: string;
            label: string;
            data?: TOptionData | undefined;
            index: number;
        }): any;
        popoverFooter?(_: {
            options: QuesoDropdownOptions<TOptionData>;
            activeOptions: QuesoDropdownOptions<TOptionData>;
        }): any;
        afterDropdown?(_: {}): any;
    };
    emit: ((evt: "dropdown:open") => void) & ((evt: "dropdown:close") => void);
}>) => import('vue').VNode<import('vue').RendererNode, import('vue').RendererElement, {
    [key: string]: any;
}> & {
    __ctx?: {
        props: {
            isDisabled?: boolean | undefined;
            modelValue?: import('./types').QuesoDropdownOptionValues | undefined;
            multiple?: boolean | undefined;
            "onDropdown:open"?: (() => any) | undefined;
            "onDropdown:close"?: (() => any) | undefined;
            options: QuesoDropdownOptions<TOptionData>;
            stayOpenOnSelection?: boolean | undefined;
        } & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps;
        expose(exposed: import('vue').ShallowUnwrapRef<{
            isDropdownOpen: import('vue').Ref<boolean>;
            openDropdown: () => void;
            closeDropdown: () => void;
        }>): void;
        attrs: any;
        slots: {
            selector?(_: {
                isDropdownOpen: boolean;
                options: QuesoDropdownOptions<TOptionData>;
                activeOptions: QuesoDropdownOptions<TOptionData>;
            }): any;
            selectorBeforeText?(_: {
                isDropdownOpen: boolean;
                options: QuesoDropdownOptions<TOptionData>;
                activeOptions: QuesoDropdownOptions<TOptionData>;
            }): any;
            selectorPlaceholder?(_: {
                isDropdownOpen: boolean;
            }): any;
            selectorActiveOptions?(_: {
                isDropdownOpen: boolean;
                activeOptions: QuesoDropdownOptions<TOptionData>;
            }): any;
            selectorAfterText?(_: {
                isDropdownOpen: boolean;
                options: QuesoDropdownOptions<TOptionData>;
                activeOptions: QuesoDropdownOptions<TOptionData>;
            }): any;
            selectorIcon?(_: {
                isDropdownOpen: boolean;
            }): any;
            popoverHeader?(_: {
                options: QuesoDropdownOptions<TOptionData>;
                activeOptions: QuesoDropdownOptions<TOptionData>;
            }): any;
            popoverItem?(_: {
                isSelected: boolean;
                openDropdown: () => void;
                closeDropdown: () => void;
                value: string;
                label: string;
                data?: TOptionData | undefined;
                index: number;
            }): any;
            popoverFooter?(_: {
                options: QuesoDropdownOptions<TOptionData>;
                activeOptions: QuesoDropdownOptions<TOptionData>;
            }): any;
            afterDropdown?(_: {}): any;
        };
        emit: ((evt: "dropdown:open") => void) & ((evt: "dropdown:close") => void);
    } | undefined;
};
export default _default;
