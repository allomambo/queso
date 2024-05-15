import type { QuesoFieldProps, QuesoFieldBase } from "@components/QuesoField";
import type { QuesoDropdownOptions } from "@components/QuesoDropdown";

export interface QuesoSelectProps extends QuesoFieldProps, QuesoFieldBase {
    options: QuesoDropdownOptions;
    placeholder?: string;
}
