export type QuesoDropdownOptionValue = string;
export type QuesoDropdownOptionValues = QuesoDropdownOptionValue[];
export type QuesoDropdownModel = QuesoDropdownOptionValues;
export interface QuesoDropdownOption<TOptionData = Record<string, any>> {
    value: QuesoDropdownOptionValue;
    label: string;
    data?: TOptionData;
}
export type QuesoDropdownOptions<TOptionData = Record<string, any>> = QuesoDropdownOption<TOptionData>[];
export interface QuesoDropdownProps<TOptionData = Record<string, any>> {
    options: QuesoDropdownOptions<TOptionData>;
    multiple?: boolean;
    stayOpenOnSelection?: boolean;
    isDisabled?: boolean;
}
