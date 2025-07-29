import type { QuesoFieldProps, QuesoFieldBase } from "@components/QuesoField";
import type { QuesoDropdownOption, QuesoDropdownOptions, QuesoDropdownOptionValue } from "@components/QuesoDropdown";

export type QuesoSelectOption = QuesoDropdownOption;
export type QuesoSelectOptions = QuesoDropdownOptions;

export type QuesoSelectModel = QuesoDropdownOptionValue;

export interface QuesoSelectProps extends QuesoFieldProps, QuesoFieldBase {
    options: QuesoSelectOptions;
    placeholder?: string;
}
