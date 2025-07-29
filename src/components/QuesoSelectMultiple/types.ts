import type { QuesoFieldProps, QuesoFieldBase } from "@components/QuesoField";
import type { QuesoDropdownOption, QuesoDropdownOptions, QuesoDropdownModel } from "@components/QuesoDropdown";

export type QuesoSelectMultipleOption = QuesoDropdownOption;
export type QuesoSelectMultipleOptions = QuesoDropdownOptions;

export type QuesoSelectMultipleModel = QuesoDropdownModel;

export interface QuesoSelectMultipleProps extends QuesoFieldProps, QuesoFieldBase {
    options: QuesoSelectMultipleOptions;
    placeholder?: string;
}
