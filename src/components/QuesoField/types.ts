// Interface usable for all field components
export type QuesoFieldBaseExtraAttributes = Record<string, string>;

export interface QuesoFieldBase {
    extraAttributes?: QuesoFieldBaseExtraAttributes;
}

// QuesoField props
export interface QuesoFieldProps {
    // Base
    id?: string;
    name: string;
    label?: string;
    // States
    isError?: boolean;
    isRequired?: boolean;
    isDisabled?: boolean;
    isReadOnly?: boolean;
}

export interface QuesoFieldPrivateProps extends QuesoFieldProps {
    hasStaticLabel?: boolean;
}

// Typeguard
// Determines if a prop is a QuesoFieldProps
const quesoFieldPropsKey = ["id", "name", "label", "isError", "isRequired", "isDisabled", "isReadOnly"] as Array<
    keyof QuesoFieldProps
>;

export function isQuesoFieldProps(prop: any): prop is keyof QuesoFieldProps {
    return quesoFieldPropsKey.includes(prop as keyof QuesoFieldProps);
}
