import type { QuesoFieldProps, QuesoFieldBase } from "@components/QuesoField";
import type { Option } from "@components/QuesoDropdown/types";

export interface QuesoSelectProps extends QuesoFieldProps, QuesoFieldBase {
    options: Option[];
    multiple?: boolean;
    placeholder?: string;
}
