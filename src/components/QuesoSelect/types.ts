import type { QuesoFieldProps } from "@components/QuesoField";
import { Option } from "@components/QuesoDropdown/types";

export interface QuesoSelectProps extends QuesoFieldProps {
    options: Option[];
    multiple?: boolean;
    placeholder?: string;
}
