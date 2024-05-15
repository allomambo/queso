import type { QuesoFieldProps, QuesoFieldBase } from "@components/QuesoField";
import type { QuesoDropdownOptions, QuesoDropdownOptionValue } from "@components/QuesoDropdown";

export type QuesoSelectModel = QuesoDropdownOptionValue;

export interface QuesoSelectProps extends QuesoFieldProps, QuesoFieldBase {
    options: QuesoDropdownOptions;
    placeholder?: string;
}
