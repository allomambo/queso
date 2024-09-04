import type { QuesoFieldProps, QuesoFieldBase } from "@components/QuesoField";
import type { QuesoDropdownOptions, QuesoDropdownModel } from "@components/QuesoDropdown";

export type QuesoSelectMultipleOptions = QuesoDropdownOptions;
export type QuesoSelectMultipleModel = QuesoDropdownModel;

export interface QuesoSelectMultipleProps extends QuesoFieldProps, QuesoFieldBase {
    options: QuesoSelectMultipleOptions;
    placeholder?: string;
}
