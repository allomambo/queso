import type { QuesoFieldProps, QuesoFieldBase } from "@components/QuesoField";
import type { QuesoDropdownOption, QuesoDropdownOptions, QuesoDropdownModel } from "@components/QuesoDropdown";

export type QuesoSelectMultipleOption<TOptionData = Record<string, any>> = QuesoDropdownOption<TOptionData>;
export type QuesoSelectMultipleOptions<TOptionData = Record<string, any>> = QuesoDropdownOptions<TOptionData>;

export type QuesoSelectMultipleModel = QuesoDropdownModel;

export interface QuesoSelectMultipleProps<TOptionData = Record<string, any>> extends QuesoFieldProps, QuesoFieldBase {
    options: QuesoSelectMultipleOptions<TOptionData>;
    placeholder?: string;
}
