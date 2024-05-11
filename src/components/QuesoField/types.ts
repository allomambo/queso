export type QuesoFieldBaseExtraAttributes = Record<string, string>;

export interface QuesoFieldBase {
    extraAttributes?: QuesoFieldBaseExtraAttributes;
}

export interface QuesoFieldProps {
    // Base
    id?: string;
    name?: string;
    modelValue?: any;
    label?: string;

    // States
    isError?: boolean;
    isRequired?: boolean;
    isDisabled?: boolean;
    isReadOnly?: boolean;
}

// Typeguard: Determines if a prop is a QuesoFieldProps
const quesoFieldPropsKey = [
    "id",
    "name",
    "modelValue",
    "label",
    "isError",
    "isRequired",
    "isDisabled",
    "isReadOnly",
] as Array<keyof QuesoFieldProps>;

export function isQuesoFieldProps(prop: any): prop is keyof QuesoFieldProps {
    return quesoFieldPropsKey.includes(prop as keyof QuesoFieldProps);
}
