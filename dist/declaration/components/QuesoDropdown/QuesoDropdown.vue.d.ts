import { QuesoDropdownOptions } from './types';

declare const _default: <TOptionData extends Record<string, any> = Record<string, any>>(__VLS_props: {
    isError?: boolean | undefined;
    isRequired?: boolean | undefined;
    isDisabled?: boolean | undefined;
    modelValue?: import('./types').QuesoDropdownOptionValues | undefined;
    readonly "onDropdown:open"?: (() => any) | undefined;
    readonly "onDropdown:close"?: (() => any) | undefined;
    options: QuesoDropdownOptions<TOptionData>;
    multiple?: boolean | undefined;
    stayOpenOnSelection?: boolean | undefined;
    ariaLabel?: string | undefined;
    ariaLabelledby?: string | undefined;
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
            isFocused: boolean;
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
} | undefined, __VLS_expose?: ((exposed: {
    isDropdownOpen: boolean;
    openDropdown: () => void;
    closeDropdown: () => void;
    focusSelector: () => void;
}) => void) | undefined, __VLS_setup?: Promise<{
    props: {
        isError?: boolean | undefined;
        isRequired?: boolean | undefined;
        isDisabled?: boolean | undefined;
        modelValue?: import('./types').QuesoDropdownOptionValues | undefined;
        readonly "onDropdown:open"?: (() => any) | undefined;
        readonly "onDropdown:close"?: (() => any) | undefined;
        options: QuesoDropdownOptions<TOptionData>;
        multiple?: boolean | undefined;
        stayOpenOnSelection?: boolean | undefined;
        ariaLabel?: string | undefined;
        ariaLabelledby?: string | undefined;
    } & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps;
    expose(exposed: {
        isDropdownOpen: boolean;
        openDropdown: () => void;
        closeDropdown: () => void;
        focusSelector: () => void;
    }): void;
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
            isFocused: boolean;
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
            isError?: boolean | undefined;
            isRequired?: boolean | undefined;
            isDisabled?: boolean | undefined;
            modelValue?: import('./types').QuesoDropdownOptionValues | undefined;
            readonly "onDropdown:open"?: (() => any) | undefined;
            readonly "onDropdown:close"?: (() => any) | undefined;
            options: QuesoDropdownOptions<TOptionData>;
            multiple?: boolean | undefined;
            stayOpenOnSelection?: boolean | undefined;
            ariaLabel?: string | undefined;
            ariaLabelledby?: string | undefined;
        } & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps;
        expose(exposed: {
            isDropdownOpen: boolean;
            openDropdown: () => void;
            closeDropdown: () => void;
            focusSelector: () => void;
        }): void;
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
                isFocused: boolean;
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
