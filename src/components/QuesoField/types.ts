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
    isAutocomplete?: boolean;
}
