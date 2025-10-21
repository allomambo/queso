export type QuesoDropdownOptionValue = string;
export type QuesoDropdownOptionValues = QuesoDropdownOptionValue[];
export type QuesoDropdownModel = QuesoDropdownOptionValues;
export interface QuesoDropdownOption {
    value: QuesoDropdownOptionValue;
    label: string;
    data?: object;
}
export type QuesoDropdownOptions = QuesoDropdownOption[];
export interface QuesoDropdownProps {
    options: QuesoDropdownOptions;
    multiple?: boolean;
    stayOpenOnSelection?: boolean;
}
