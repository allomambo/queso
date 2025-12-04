import type { QuesoFieldProps, QuesoFieldBase } from "@components/QuesoField";
import type { QuesoDropdownOption, QuesoDropdownOptions, QuesoDropdownOptionValue } from "@components/QuesoDropdown";

export type QuesoSelectOption<TOptionData = Record<string, any>> = QuesoDropdownOption<TOptionData>;
export type QuesoSelectOptions<TOptionData = Record<string, any>> = QuesoDropdownOptions<TOptionData>;

export type QuesoSelectModel = QuesoDropdownOptionValue;

export interface QuesoSelectProps<TOptionData = Record<string, any>> extends QuesoFieldProps, QuesoFieldBase {
    options: QuesoSelectOptions<TOptionData>;
    placeholder?: string;
}
