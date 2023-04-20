import type { PropType as __PropType } from 'vue';
export interface Props {
    expandOnMount?: boolean;
}
declare const _sfc_main: import("vue").DefineComponent<{
    expandOnMount: {
        type: __PropType<boolean>;
        required: false;
    };
}, {
    isCollapsibleOpen: import("vue").Ref<boolean>;
    open: () => void;
    close: () => void;
    toggle: (bool?: boolean) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("open" | "close" | "toggle")[], "open" | "close" | "toggle", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    expandOnMount: {
        type: __PropType<boolean>;
        required: false;
    };
}>> & {
    onOpen?: (...args: any[]) => any;
    onClose?: (...args: any[]) => any;
    onToggle?: (...args: any[]) => any;
}, {}>;
export default _sfc_main;
