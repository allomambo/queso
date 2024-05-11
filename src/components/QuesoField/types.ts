export interface QuesoFieldProps {
    // Base
    id?: string;
    name?: string;
    modelValue?: any;
    label?: string;

    // States
    isRequired?: boolean;
    isDisabled?: boolean;
    isReadOnly?: boolean;
    isError?: boolean;
    isAutocomplete?: boolean;
}
